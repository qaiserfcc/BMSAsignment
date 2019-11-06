import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-standard-skills',
  templateUrl: './standard-skills.component.html',
  styleUrls: ['./standard-skills.component.css']
})
export class StandardSkillsComponent implements OnInit {
  @Input('standardSkills') standardSkills = [];
  @Output('standSkillRowClick') standSkillRowClick: EventEmitter<any> = new EventEmitter(); 
  ngOnChanges() {
  }

  ngOnInit() {
  }

  standardSkillRowClick(skill,index) {
    this.standSkillRowClick.emit({skill,index});
  }
}
