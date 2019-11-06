import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mapped-skills',
  templateUrl: './mapped-skills.component.html',
  styleUrls: ['./mapped-skills.component.css']
})
export class MappedSkillsComponent implements OnInit {
  @Input('title') title = 'Mapped Skills';
  @Input('mappedSkills') mappedSkills = [];
  @Output('mapSkillRowClick') mapSkillRowClick: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }
  
  mappedSkillRowClick(skill,index ) {
    debugger;
    this.mapSkillRowClick.emit({ skill,index });
  }

}
