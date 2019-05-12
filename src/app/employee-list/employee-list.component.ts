import { Component, OnInit, ViewChild } from '@angular/core';
import { PeriodicElement } from './sectionSchema';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog} from '@angular/material';
import { EmployeeAddChildComponent } from '../employee-add/employee-add-child/employee-add-child.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

 ELEMENT_DATA: PeriodicElement[] = [
  {fullname: 'Joebert', email: 'Hydrogen@yahoo.com', mobile: 9176932537, city: 'Mandaluyong', department: new Date('1/17/16'), actions: 'actions'},
  {fullname: 'Bheng', email: 'Helium@gmail.com', mobile: 9176932537, city: 'Makati', department: new Date('1/17/16'), actions: 'actions'},
  {fullname: 'Ben', email: 'Lithium@gmail.com', mobile: 9176932537, city: 'Pasay', department: new Date('1/17/16'), actions: 'actions'},
  {fullname: 'Joe', email: 'Beryllium@gmail.com', mobile: 9176932537, city: 'Pasig', department: new Date('1/17/16'), actions: 'actions'},
  {fullname: 'CJ', email: 'Boron@gmail.com', mobile: 9176932537, city: 'San Juan', department: new Date('1/17/16'), actions: 'actions'},
  {fullname: 'Cyben', email: 'Carbon@gmail.com', mobile: 9176932537, city: 'Maynila', department: new Date('1/17/16'), actions: 'actions'},
  {fullname: 'Faith', email: 'Nitrogen@gmail.com', mobile: 9176932537, city: 'Rizal', department: new Date('1/17/16'), actions: 'actions'},
  {fullname: 'Lala', email: 'Oxygen@gmail.com', mobile: 9176932537, city: 'Quezon', department: new Date('1/17/16'), actions: 'actions'},
  {fullname: 'Cristela', email: 'Fluorine@gmail.com', mobile: 9176932537, city: 'caloocan', department: new Date('1/17/16'), actions: 'actions'},
  {fullname: 'Jennifer', email: 'Neon@gmail.com', mobile: 9176932537, city: 'Valenzuela', department: new Date('1/17/16'), actions: 'actions'},
  {fullname: 'Joebert', email: 'Hydrogen@yahoo.com', mobile: 9176932537, city: 'Mandaluyong', department: new Date('1/17/16'), actions: 'actions'},
  {fullname: 'Bheng', email: 'Helium@gmail.com', mobile: 9176932537, city: 'Makati', department: new Date('1/17/16'), actions: 'actions'},
  {fullname: 'Ben', email: 'Lithium@gmail.com', mobile: 9176932537, city: 'Pasay', department: new Date('1/17/16'), actions: 'actions'},
  {fullname: 'Joe', email: 'Beryllium@gmail.com', mobile: 9176932537, city: 'Pasig', department: new Date('1/17/16'), actions: 'actions'},
  {fullname: 'CJ', email: 'Boron@gmail.com', mobile: 9176932537, city: 'San Juan', department: new Date('1/17/16'), actions: 'actions'},
  {fullname: 'Cyben', email: 'Carbon@gmail.com', mobile: 9176932537, city: 'Maynila', department: new Date('1/17/16'), actions: 'actions'},
  {fullname: 'Faith', email: 'Nitrogen@gmail.com', mobile: 9176932537, city: 'Rizal', department: new Date('1/17/16'), actions: 'actions'},
  {fullname: 'Lala', email: 'Oxygen@gmail.com', mobile: 9176932537, city: 'Quezon', department: new Date('1/17/16'), actions: 'actions'},
  {fullname: 'Cristela', email: 'Fluorine@gmail.com', mobile: 9176932537, city: 'caloocan', department: new Date('1/17/16'), actions: 'actions'},
  {fullname: 'Jennifer', email: 'Neon@gmail.com', mobile: 9176932537, city: 'Valenzuela', department: new Date('1/17/16'), actions: 'actions'}
];

displayedColumns: string[] = ['fullname', 'email', 'mobile', 'city', 'department', 'actions']; //, 'action'
dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
searchKey: string;

  constructor(public dialog: MatDialog) {  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(searchKey: string){
     console.log(searchKey);
     this.dataSource.filter = searchKey.trim().toLowerCase();
  }

  onSearchKeyClear(){
    this.searchKey = "";
  }

  openDialog(){
    const dialogRef = this.dialog.open(EmployeeAddChildComponent, {
       width: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
       console.log(`Result: ${result}`);
    });
  }

  delete(element){
    console.log(element.fullname);
  }


}
