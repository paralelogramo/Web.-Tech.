import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperivehelpComponent } from './operivehelp.component';

describe('OperivehelpComponent', () => {
  let component: OperivehelpComponent;
  let fixture: ComponentFixture<OperivehelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperivehelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperivehelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
