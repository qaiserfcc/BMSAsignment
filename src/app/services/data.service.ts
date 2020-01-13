import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  skills: any = [];
  dynamicSkills: any = [];
  constructor() {
    console.log("Once initiated");
    this.buildStaticData();
  }


  buildStaticData() {

    this.dynamicSkills = [
      {
        skill: "Lead research into the relevant local and global laws and regulations to ensure Mubadala Investment Company is in line with the latest developments and to drive the implementation of internal policies and procedures.",
        top_skills: [
          "develop technological improvement strategies",
          "maintain operational standards",
          "develop aftersale policies",
          "develop organisational policies",
          "ensure compliance with policies",
          "ensure compliance with company regulations",
          "business strategy concepts",
          "ensure adherence to organisational ICT standards",
          "ICT environmental policies"
        ],
        medium_skills: [
          "apply system organisational policies"
        ],
        low_skills: [
          "Low Skills"
        ]
      },
      {
        skill: "2-Lead research into the relevant local and global laws and regulations to ensure Mubadala Investment Company is in line with the latest developments and to drive the implementation of internal policies and procedures.",
        top_skills: [
          "2-develop technological improvement strategies",
          "maintain operational standards",
          "develop aftersale policies",
          "develop organisational policies",
          "ensure compliance with policies",
          "ensure compliance with company regulations",
          "business strategy concepts",
          "ensure adherence to organisational ICT standards",
          "ICT environmental policies"
        ],
        medium_skills: [
          "2-apply system organisational policies"
        ],
        low_skills: [
          "2-Low Skills"
        ]
      }
    ]
    let mainSkills: any = [];
    this.dynamicSkills.forEach(function (element, ind) {
      let skill: any = {};
      skill.skill = element.skill;
      let _standardSkills = [];
      element.top_skills.forEach(function (skill) {
        _standardSkills.push({
          refInd: ind,
          skillName: skill,
          level: 1,
          selected: false
        });
      });
      element.medium_skills.forEach(function (skill) {
        _standardSkills.push({
          refInd: ind,
          skillName: skill,
          level: 2,
          selected: false
        });
      });
      element.low_skills.forEach(function (skill) {
        _standardSkills.push({
          refInd: ind,
          skillName: skill,
          level: 3,
          selected: false
        });
      });
      skill.standardSkills = _standardSkills;
      skill.mappedSkills = [];
      mainSkills.push(skill);
    });
    this.skills = mainSkills;
  }

}
