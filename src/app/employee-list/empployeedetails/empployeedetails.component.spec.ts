import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpployeedetailsComponent } from './empployeedetails.component';

describe('EmpployeedetailsComponent', () => {
  let component: EmpployeedetailsComponent;
  let fixture: ComponentFixture<EmpployeedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpployeedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpployeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
