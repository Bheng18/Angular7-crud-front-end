import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddChildComponent } from './employee-add-child.component';

describe('EmployeeAddChildComponent', () => {
  let component: EmployeeAddChildComponent;
  let fixture: ComponentFixture<EmployeeAddChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAddChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAddChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
