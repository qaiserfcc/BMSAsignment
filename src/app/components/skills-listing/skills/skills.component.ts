import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input('skills') skills = [];
  @Output('_selectedSkill') _selectedSkill: EventEmitter<any> = new EventEmitter();
  selectedRow: any;
  ngOnInit() {
    this.selectedRow = 0;
  }
  
  selectedSkill(skill,index) {
    this.selectedRow = index;
    this._selectedSkill.emit({skill,index});
  }

}
