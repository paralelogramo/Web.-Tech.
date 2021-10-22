import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoreventsComponent } from './professorevents.component';

describe('ProfessoreventsComponent', () => {
  let component: ProfessoreventsComponent;
  let fixture: ComponentFixture<ProfessoreventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessoreventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessoreventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
