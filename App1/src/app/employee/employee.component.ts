import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employees=[
    {"empNo":101,"empName":"Sachin","empSalary":20000},
    {"empNo":102,"empName":"Rahul","empSalary":30000},
    {"empNo":103,"empName":"Rohit","empSalary":40000}
  ]
  

}
