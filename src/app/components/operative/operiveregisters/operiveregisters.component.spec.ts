import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperiveregistersComponent } from './operiveregisters.component';

describe('OperiveregistersComponent', () => {
  let component: OperiveregistersComponent;
  let fixture: ComponentFixture<OperiveregistersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperiveregistersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperiveregistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
