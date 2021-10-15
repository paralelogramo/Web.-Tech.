import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativehomeComponent } from './operativehome.component';

describe('OperativehomeComponent', () => {
  let component: OperativehomeComponent;
  let fixture: ComponentFixture<OperativehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperativehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperativehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
