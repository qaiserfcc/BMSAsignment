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
    debugger;
    this.skills = this.dataService.skills;
  }

  ngOnInit() {
    this.selectedRow = 0;
    this.standardSkills = this.skills[0].standardSkills;
    this.mappedSkills = this.skills[0].mappedSkills;
  }

  selectedSkill(skill) {
    this.selectedRow = skill.index;
    this.standardSkills = this.skills[this.selectedRow].standardSkills;
    this.mappedSkills = this.skills[this.selectedRow].mappedSkills;
  }

  standSkillRowClick(skill) {
    skill.skill.selected = !skill.skill.selected;
    this.updateSkilMappedStatus(skill.skill, skill.skill.selected);
    this.mappedSkills = this.skills[skill.skill.refInd].mappedSkills;
  }

  mappedSkillRowClick(skill) {
    //remove skill
    this.skills[skill.skill.refInd].mappedSkills = this.skills[skill.skill.refInd].mappedSkills.filter(obj => obj.skillName != skill.skill.skillName);
    this.updateStandardSkillStatus(skill.skill);
  }

  updateSkilMappedStatus(skill, add) {
    if (add) {
      //add skill
      this.skills[skill.refInd].mappedSkills.push(skill);
    }
    else {
      //remove skill
      this.skills[skill.refInd].mappedSkills = this.skills[skill.refInd].mappedSkills.filter(obj => obj.skillName != skill.skillName);
    }
  }
  
  updateStandardSkillStatus(skill) {
    for (let f1 = 0; f1 < this.skills.length; f1++) {
      for (let f2 = 0; f2 < this.skills[f1].standardSkills.length; f2++) {
        if (this.skills[f1].standardSkills[f2].skillName == skill.skillName) {
          this.skills[f1].standardSkills[f2].selected = !this.skills[f1].standardSkills[f2].selected;
          break;
        }
      }
    };
    this.mappedSkills = this.skills[skill.refInd].mappedSkills;
  }
}
