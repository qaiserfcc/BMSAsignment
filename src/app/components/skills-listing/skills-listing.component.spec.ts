import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { skillslistingComponent } from './skillslisting.component';

describe('skillslistingComponent', () => {
  let component: skillslistingComponent;
  let fixture: ComponentFixture<skillslistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ skillslistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(skillslistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
