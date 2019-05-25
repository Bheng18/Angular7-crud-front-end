import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpployeedetailsComponent } from './employee-list/empployeedetails/empployeedetails.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
   { path: '', redirectTo: 'employeeList', pathMatch: 'full' },
   { path: 'employeeList', component: EmployeeListComponent },
   { path: 'employeeDetails/:empId', component: EmpployeedetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [
      EmpployeedetailsComponent,
      EmployeeListComponent
    ] //add more routing component here