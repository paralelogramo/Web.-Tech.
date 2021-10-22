import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorhelpComponent } from './professorhelp.component';

describe('ProfessorhelpComponent', () => {
  let component: ProfessorhelpComponent;
  let fixture: ComponentFixture<ProfessorhelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorhelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
