import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
import { PeriodicElement } from '../employee-list/sectionSchema';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

// private _url: string = "/assets/data/employee.json";
// private _url = "http://127.0.0.1:3000";
private _url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    empId: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(11)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(''),
    hireDate:  new FormControl(''),
    isPermanent: new FormControl(false) 
  });

  getEmployee(): Observable<PeriodicElement[]>{
    return this.http.get<PeriodicElement[]>(this._url);
  }

  // getEmployeeById(id): Observable<PeriodicElement[]>{
  //   return this.http.get<PeriodicElement[]>(`${this._url}/employee/${id}`);
  // }

  addEmployee(employeeFormValue: any){
    this.http.post<any>(`${this._url}/add`, employeeFormValue).subscribe(()=>{
      // console.log("Done");
    });
  }

  //for update
  updateEmployee(updateFormValue){
    this.http.put<any>(`${this._url}/update/${updateFormValue.empId}`, updateFormValue).subscribe(()=>{
       this.getEmployee();
    });
  }

  //for edit form
  populateForm(employee){
    console.log('from service', employee);
    this.form.setValue(_.omit(employee, `${employee.department}`));
      // this.form.setValue(employee);
  }

  initializeFormGroup(){
    this.form.setValue({
      empId: null,
      fullName: '',
      email: '',
      mobile: '', 
      city: '',
      gender: '1',
      department: '',
      hireDate: '',
      isPermanent: false 
    });
  }

  deleteEmployee(id){
    console.log('Service Console', id);
    return this.http.delete<any>(`${this._url}/delete/${id}`);
  }

}
