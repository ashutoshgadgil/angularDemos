import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ShowExpenseComponent } from './show-expense/show-expense.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SortExpensesComponent } from './sort-expenses/sort-expenses.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"addexpense",component:AddExpenseComponent},
  {path:"showexpense",component:ShowExpenseComponent},
  {path:"sortexpense",component:SortExpensesComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
