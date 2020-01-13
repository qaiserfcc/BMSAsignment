import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mapped-skills',
  templateUrl: './mapped-skills.component.html',
  styleUrls: ['./mapped-skills.component.css']
})
export class MappedSkillsComponent{
  @Input('title') title = 'Mapped Skills';
  @Input('mappedSkills') mappedSkills = [];
  @Output('mapSkillRowClick') mapSkillRowClick: EventEmitter<any> = new EventEmitter();

  mappedSkillRowClick(skill: any,index: any ) {
    this.mapSkillRowClick.emit({ skill,index });
  }

}
