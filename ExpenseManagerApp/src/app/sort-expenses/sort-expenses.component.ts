import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-sort-expenses',
  templateUrl: './sort-expenses.component.html',
  styleUrls: ['./sort-expenses.component.css']
})
export class SortExpensesComponent {

  expenseDetails:FormGroup;

  selectedExpenses:any;
  constructor(private es:ExpenseService)
  {
    this.expenseDetails=new FormGroup({
      startDate:new FormControl(),
      endDate:new FormControl()
    })
  }

  showDetails()
  {
    this.es.getSelectedExpenses(this.expenseDetails).subscribe(data=>{
      this.selectedExpenses=data;
      
    });
    //console.log(this.expenseDetails);
  }
}
