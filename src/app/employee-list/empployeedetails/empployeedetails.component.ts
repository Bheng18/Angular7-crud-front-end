import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-empployeedetails',
  templateUrl: './empployeedetails.component.html',
  styleUrls: ['./empployeedetails.component.css']
})
export class EmpployeedetailsComponent implements OnInit {

  public empId;
  public empData;
  // public employeeData;
  constructor(private _activateRoute: ActivatedRoute, private _router: Router, private _empService: EmployeeService) { }

  ngOnInit() {
    // let id = this._activateRoute.snapshot.paramMap.getAll('empId');
    // this.empId = id;
      this._activateRoute.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('empId'));
      this.empId = id;

      this._empService.getEmployeeById(this.empId).subscribe((data)=>{ this.empData = data });

    });
    // let arrayData = data.map(item =>{
    //   return {
    //     ...item
    //   };
    // })
    // this.empData = arrayData;         
    // console.log(this.empData);
  }

  goPrevious(){
    let previousId = this.empId - 1;
    this._router.navigate(['/employeeDetails', previousId]);
  }

  goNext(){
    let nextId = this.empId + 1;
    this._router.navigate(['/employeeDetails', nextId]);
  }

}
