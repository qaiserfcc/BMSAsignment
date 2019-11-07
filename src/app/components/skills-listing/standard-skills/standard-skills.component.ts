import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-standard-skills',
  templateUrl: './standard-skills.component.html',
  styleUrls: ['./standard-skills.component.css']
})
export class StandardSkillsComponent{
  @Input('standardSkills') standardSkills = [];
  @Output('standSkillRowClick') standSkillRowClick: EventEmitter<any> = new EventEmitter(); 

  standardSkillRowClick(skill: any,index: any) {
    this.standSkillRowClick.emit({skill,index});
  }
}
