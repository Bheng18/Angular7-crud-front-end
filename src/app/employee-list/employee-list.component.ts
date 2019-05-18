import { Component, OnInit, ViewChild } from '@angular/core';
import { PeriodicElement } from './sectionSchema';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { EmployeeAddChildComponent } from '../employee-add/employee-add-child/employee-add-child.component';
import { EmployeeService } from '../shared/employee.service';
import { ConfirmDialogService } from '../shared/confirm-dialog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  element: any;
  public disabled;

  constructor(public dialog: MatDialog, 
              private service: EmployeeService, 
              public dialogService: ConfirmDialogService,
              public _router: Router
              ) {  }
  // ELEMENT_DATA = [
  // //  this.service.getEmployee();   
  // ];
  listData: MatTableDataSource<PeriodicElement>;

displayedColumns: string[] = ['fullName', 'email', 'mobile', 'city', 'gender', 'department', 'hireDate', 'actions']; //, 'action'
// dataSource = new MatTableDataSource(this.listData); //this.ELEMENT_DATA

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
searchKey: string;

getEmployeeFromServiceAndConvertData(){
  this.service.getEmployee().subscribe(data => { 
    let array = data.map(item => {
      return {
        ...item
      };
    })
    this.listData = new MatTableDataSource(array);
    this.listData.paginator = this.paginator;
    this.listData.sort = this.sort;
  });
}

  ngOnInit() {
    this.getEmployeeFromServiceAndConvertData();
  }

  applyFilter(searchKey: string){
     console.log(searchKey);
     this.listData.filter = searchKey.trim().toLowerCase();
  }

  onSearchKeyClear(){
    this.searchKey = "";
  }

  openDialog(){
    this.service.initializeFormGroup();
    const dialogRef = this.dialog.open(EmployeeAddChildComponent, {
       width: '800px',
       autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
       console.log(`Result: ${result}`);
    this.getEmployeeFromServiceAndConvertData();
    });
  }

  edit(element){
    // console.log('from list', element);
    this.service.populateForm(element);
    this.disabled = false;
    const dialogRef = this.dialog.open(EmployeeAddChildComponent, {
      width: '800px',
      autoFocus: false,
    });
   dialogRef.afterClosed().subscribe(result => {
      console.log(`Result: ${result}`);
      this.getEmployeeFromServiceAndConvertData();
   });
  }

  details(element){
    this._router.navigate([`/employeeDetails/${element.empId}`]);    
  }

  delete(element){
    this.dialogService.openConfirmDialog(element);
  }

  // editIssue(id) {
  //   this.router.navigate([`/edit/${id}`]);
  // }

  // deleteIssue(id) {
  //   this.issueService.deleteIssue(id).subscribe(() => {
  //     this.fetchIssues();
  //   });
  // }

}
