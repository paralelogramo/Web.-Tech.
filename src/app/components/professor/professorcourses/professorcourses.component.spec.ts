import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorcoursesComponent } from './professorcourses.component';

describe('ProfessorcoursesComponent', () => {
  let component: ProfessorcoursesComponent;
  let fixture: ComponentFixture<ProfessorcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorcoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
