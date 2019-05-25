import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../confirm/dialog/dialog.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  constructor(private dialog: MatDialog,
              private _router: Router, 
              public _location: Location,
              public _empService: EmployeeService) { }

openConfirmDialog(element){
  const dialogRef = this.dialog.open(DialogComponent, {
     width: '400px',
     disableClose: true,
     data: {
       id: element.empId,
       fullName: element.fullName
     }  
  });

  dialogRef.afterClosed().subscribe(result => {
    // console.log('The dialog was closed', result);
    // this.refresh();
  });
}

refresh(): void {
  this._router.navigateByUrl("/employeeList", { skipLocationChange: true }).then(() => {
    console.log(decodeURI(this._location.path()));
    this._router.navigate([decodeURI(this._location.path())]);
    this._empService.getEmployee().subscribe();
  });
}

}
