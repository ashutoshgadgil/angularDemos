import { Component } from '@angular/core';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {


  insertExp:boolean=false;

  constructor(private es:ExpenseService)
  {

  }

  saveExpense(data:any)
  {
    

    if(data.hRent!="" && data.ebill!="" && data.foodAmt!="" && data.otherExpenses!="" && data.today!="")
    {
      console.log("Not null");
      this.es.saveExpenses(data).subscribe(d=>{
        console.log("Expense Saved successfully.."+data);
    
        if(data)
          this.insertExp=true;
        else
          this.insertExp=false;
      })
    }
    else
    {
      console.log("Null");
    } 
    
      console.log(data);
  }
}
