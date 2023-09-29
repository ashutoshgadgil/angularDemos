import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ShowExpenseComponent } from './show-expense/show-expense.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SortExpensesComponent } from './sort-expenses/sort-expenses.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddExpenseComponent,
    ShowExpenseComponent,
    NotfoundComponent,
    SortExpensesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
