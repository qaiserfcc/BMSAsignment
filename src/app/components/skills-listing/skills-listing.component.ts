import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skills-listing',
  templateUrl: './skills-listing.component.html',
  styleUrls: ['./skills-listing.component.css']
})
export class SkillsListingComponent implements OnInit {

  skills: any = [];
  standardSkills: any = [];
  mappedSkills: any = [];
  selectedRow: any;

  constructor(private dataService: DataService) {
    this.skills = this.dataService.skills;
  }

  ngOnInit() {
    this.selectedRow = 0;
    this.standardSkills = this.skills[0].standardSkills;
    this.mappedSkills = this.skills[0].mappedSkills;
  }

  selectedSkill(skill: any) {
    this.selectedRow = skill.index;
    this.standardSkills = this.skills[this.selectedRow].standardSkills;
    this.mappedSkills = this.skills[this.selectedRow].mappedSkills;
  }

  standSkillRowClick(skill: any) { //add skill
    this.skills[skill.skill.refInd].standardSkills = this.skills[skill.skill.refInd].standardSkills.filter(obj => obj.skillName != skill.skill.skillName);
    this.skills[skill.skill.refInd].mappedSkills.push(skill.skill);
    this.standardSkills = this.skills[skill.skill.refInd].standardSkills;
    this.mappedSkills = this.skills[skill.skill.refInd].mappedSkills;
  }

  mappedSkillRowClick(skill: any) {
    //remove skill
    this.skills[skill.skill.refInd].mappedSkills = this.skills[skill.skill.refInd].mappedSkills.filter(obj => obj.skillName != skill.skill.skillName);
    this.skills[skill.skill.refInd].standardSkills.push(skill.skill);
    this.standardSkills = this.skills[skill.skill.refInd].standardSkills.sort((a, b) => {
      if (a.level < b.level) {
        return -1;
      } else if (a.level > b.level) {
        return 1;
      } else {
        return 0;
      }
    });
    this.mappedSkills = this.skills[skill.skill.refInd].mappedSkills.sort((a, b) => {
      if (a.level < b.level) {
        return -1;
      } else if (a.level > b.level) {
        return 1;
      } else {
        return 0;
      }
    });;
  }
}
