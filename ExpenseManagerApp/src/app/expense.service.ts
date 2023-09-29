import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private httpclient:HttpClient) { }

  saveExpenses(expenseData:any)
  {
    let expenses={"hrent":expenseData.hRent,"ebill":expenseData.ebill,"foodAmt":expenseData.foodAmt,"tcost":expenseData.tCost,"otherexpenses":expenseData.otherExpenses,"today":expenseData.today};
    return this.httpclient.post("http://localhost:3000/saveExpenses",expenses);
  }

  showAllExpenses()
  {
    return this.httpclient.get("http://localhost:3000/showExpenses");
  }

  getTotalExpenses()
  {
    return this.httpclient.get("http://localhost:3000/getTotalExpenses");
  }

  getSelectedExpenses(expenseRange:any)
  {
    //console.log(expenseRange.value.startDate);
    
    let expdata={startDate:expenseRange.value.startDate,endDate:expenseRange.value.endDate};
    return this.httpclient.post("http://localhost:3000/getSelectedExpenses",expdata);
  }
}
