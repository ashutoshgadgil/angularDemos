import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  questions=[
    {"question":"Which is the capital of India?","answer":"New Delhi"},
    {"question":"Which is the capital of Maharashtra?","answer":"Mumbai"}
  ]

  answerSelected:string='';

  answerEntered:string='';

  questionSelected:string='';

  no=[1,2,3,4,5];
  cities=["Delhi","Mumbai","Chennai"];
  citySelected:string='';

  answerGiven:string='';

  employees=[
    {"empNo":101,"empName":"Sachin","empSalary":20000},
    {"empNo":102,"empName":"Rahul","empSalary":30000},
    {"empNo":103,"empName":"Rohit","empSalary":40000}
  ]

  checkAns()
  {
    if(this.answerEntered==this.answerSelected)
      this.answerGiven="Correct Answer";
    else
      this.answerGiven="Incorrect Answer";
  }

}
