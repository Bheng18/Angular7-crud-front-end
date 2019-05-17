import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { MatDialogRef } from '@angular/material';
import { DatePipe } from '@angular/common';
import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'app-employee-add-child',
  templateUrl: './employee-add-child.component.html',
  styleUrls: ['./employee-add-child.component.css']
})
export class EmployeeAddChildComponent implements OnInit {

  dateValue: any = new Date();

  constructor(private service: EmployeeService,
              public notifService: NotificationService,
              public dialogRef: MatDialogRef<EmployeeAddChildComponent>, 
              private datePipe: DatePipe) { }

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

  onSubmit(){
    let formValue = this.service.form.value;
        formValue.hireDate = this.datePipe.transform(formValue.hireDate, 'MM/dd/yyyy');
    if(formValue.empId != null){
      this.service.updateEmployee(formValue);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notifService.success('::Submitted Successfully . .');
      this.onClose();
    }else{
       this.service.addEmployee(formValue);
       this.service.form.reset();
       this.service.initializeFormGroup();
       this.notifService.success('::Submitted Successfully . .');
       this.onClose();
    }
  }

  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
