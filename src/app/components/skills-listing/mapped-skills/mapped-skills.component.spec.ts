import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappedSkillsComponent } from './mapped-skills.component';

describe('MappedSkillsComponent', () => {
  let component: MappedSkillsComponent;
  let fixture: ComponentFixture<MappedSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappedSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappedSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
