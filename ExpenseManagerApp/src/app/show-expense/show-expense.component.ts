import { Component } from '@angular/core';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-show-expense',
  templateUrl: './show-expense.component.html',
  styleUrls: ['./show-expense.component.css']
})
export class ShowExpenseComponent {

  totalexpense:any;
  expenseData:any;
  constructor(private es:ExpenseService)
  {

  }

  ngOnInit()
  {
    this.es.showAllExpenses().subscribe(data=>{
      this.expenseData=data;
    });

    this.es.getTotalExpenses().subscribe(data=>{
      this.totalexpense=data;
    })
  }
}
