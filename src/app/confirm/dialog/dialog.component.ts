import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { NotificationService } from 'src/app/shared/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
                                       public _service: EmployeeService,
                                       public _router: Router,
                                       public _notifService: NotificationService) { }

  ngOnInit() {
  }

  deleteEmployee(id){
    this._service.deleteEmployee(id).subscribe(() => {
      //  console.log(res);
    this._notifService.success(':: Deleted Successfully. . .');
    });
  }

}
