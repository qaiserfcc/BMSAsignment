import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSkillsComponent } from './standard-skills.component';

describe('StandardSkillsComponent', () => {
  let component: StandardSkillsComponent;
  let fixture: ComponentFixture<StandardSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
