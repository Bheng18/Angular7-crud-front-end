import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-add-child',
  templateUrl: './employee-add-child.component.html',
  styleUrls: ['./employee-add-child.component.css']
})
export class EmployeeAddChildComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  departments = [
    { id: 1, value: 'Dept 1'},
    { id: 2, value: 'Dept 2'},
    { id: 3, value: 'Dept 3'}
  ];

  ngOnInit() {
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}
