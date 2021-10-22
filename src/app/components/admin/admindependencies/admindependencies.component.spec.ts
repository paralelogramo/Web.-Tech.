import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindependenciesComponent } from './admindependencies.component';

describe('AdmindependenciesComponent', () => {
  let component: AdmindependenciesComponent;
  let fixture: ComponentFixture<AdmindependenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindependenciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindependenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
