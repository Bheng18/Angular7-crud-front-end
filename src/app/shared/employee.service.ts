import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //, Response, Headers, RequestOptions
import { PeriodicElement } from '../employee-list/sectionSchema';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
// private _url: string = "/assets/data/employee.json";
  private _url = "http://localhost:8080/api";
  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
    })
  }

  form: FormGroup = new FormGroup({
    empId: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(11)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(''),
    hireDate:  new FormControl(''),
    permanent: new FormControl(false) 
  });

  getEmployee(): Observable<PeriodicElement[]>{
    return this.http.get<PeriodicElement[]>(`${this._url}/employeeList`, this.httpOptions);
  }

  getEmployeeById(id): Observable<PeriodicElement[]>{
    return this.http.get<PeriodicElement[]>(`${this._url}/detailsEmployees/${id}`);
        // return this.http.get<PeriodicElement[]>(`${this._url}/employee/${id}`); //this
  }
 
  addEmployee(employeeFormValue){
    // console.log("Data", JSON.stringify(employeeFormValue))
        // this.http.post<any>(`${this._url}/employee`, employeeFormValue).subscribe(()=>{
    this.http.post<any>(`${this._url}/addEmployees`, employeeFormValue, this.httpOptions).subscribe((data)=>{ });
  }

  //for update
  updateEmployee(updateFormValue: any){
    // this.http.put<any>(`${this._url}/updateEmployees/${updateFormValue.empId}`, updateFormValue).subscribe(()=>{ //gumana to sa nodejs sa springboot hindi
      this.http.put<any>(`${this._url}/updateEmployees`, updateFormValue).subscribe(()=>{
      //  this.getEmployee();
    });
  }

  //for edit form
  populateForm(employee: any){
    console.log('from service', employee);
    // this.form.setValue(_.omit(employee, 'department'));
      this.form.setValue(employee);
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
      permanent: false 
    });
  }

  deleteEmployee(id:number){
    // console.log('Service Console', id);
    return this.http.delete<any>(`${this._url}/deleteEmployees/${id}`);
  }

}
