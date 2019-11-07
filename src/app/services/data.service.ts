import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  skills: any = [];
  constructor() { 
    console.log("Once initiated");
    this.buildStaticData();
  }

  
  buildStaticData() {
    //Hard Coded
    this.skills.push(
      {
        skill: "Develop annual businesplans for the Ethics and Comliance function to ensure the achievement of financial and strategic objectives",
        standardSkills: [],
        mappedSkills: []
      }
    );
    this.skills.push(
      {
        skill: "Functionally report to the Chief on the progress of activities against the annual business plans,oppurtunities,identified,chalenges and issuesfaces, mitigtions taken, etc. as required, to inform decision making",
        standardSkills: [],
        mappedSkills: []
      }
    );

    this.skills.push(
      {
        skill: "Oversease the Ethics and Compliance functions's performance by managing performance of direct and redirect reports, defining workforce requirements, recruiting, training and developing talent, in cinjuction with the human capital funcion, to ensure competent, qualified and highly motivated staff enable the accheivement of the function's objectives.",
        standardSkills: [],
        mappedSkills: []
      }
    );

    this.skills.push(
      {
        skill: "Review employee engagement results and develop avtion plans to estblish a motivated and engaged workforce",
        standardSkills: [],
        mappedSkills: []
      }
    );
    this.skills.push(
      {
        skill: "Prepare and recommend the Ethics and Compliance function's budget in alignment to the respective annual business plan.",
        standardSkills: [],
        mappedSkills: []
      }
    );
    this.skills.forEach(function (element,ind) {
      element.standardSkills.push({
        refInd : ind,
        skillName: ind + " implement operational businnes plans",
        selected: false
      });
      element.standardSkills.push({
        refInd : ind,
        skillName: ind + " analyze business objectives",
        selected: false
      });
      element.standardSkills.push({
        refInd : ind,
        skillName: ind + " analyse business plans",
        selected: false
      });
      element.standardSkills.push({
        refInd : ind,
        skillName: ind + " information security strategy",
        selected: false
      });
      element.standardSkills.push({
        refInd : ind,
        skillName: ind + " maintain operational standards",
        selected: false
      });
      element.standardSkills.push({
        refInd : ind,
        skillName: ind + " advise on legal compliance for participation in financial markets",
        selected: false
      });
      element.standardSkills.push({
        refInd : ind,
        skillName: ind + " report on environmental issues",
        selected: false
      });
      element.standardSkills.push({
        refInd : ind,
        skillName: ind + " manage a team",
        selected: false
      });
      element.standardSkills.push({
        refInd : ind,
        skillName: ind + " adapt to change in technologies development plans",
        selected: false
      });
      element.standardSkills.push({
        refInd : ind,
        skillName: ind + " manage human resources",
        selected: false
      });
      element.standardSkills.push({
        refInd : ind,
        skillName: ind + " develop staff",
        selected: false
      });
    });
  }

}
