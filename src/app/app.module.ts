import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeAddChildComponent } from './employee-add/employee-add-child/employee-add-child.component';
import { EmployeeService } from './shared/employee.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { DialogComponent } from './confirm/dialog/dialog.component';
import { ConfirmDialogService } from './shared/confirm-dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeAddChildComponent,
    DialogComponent
  ],
  entryComponents: [EmployeeAddChildComponent, DialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService, DatePipe, ConfirmDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
