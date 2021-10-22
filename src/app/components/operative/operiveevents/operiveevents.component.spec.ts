import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperiveeventsComponent } from './operiveevents.component';

describe('OperiveeventsComponent', () => {
  let component: OperiveeventsComponent;
  let fixture: ComponentFixture<OperiveeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperiveeventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperiveeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
