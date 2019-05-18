import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../confirm/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  constructor(private dialog: MatDialog) { }

openConfirmDialog(element){
  this.dialog.open(DialogComponent, {
     width: '400px',
     disableClose: true,
     data: {
       id: element.empId,
       fullName: element.fullName
     }  
  });
}

}
