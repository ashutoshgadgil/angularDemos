import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UsersComponent } from './users/users.component';
import { UserentryComponent } from './userentry/userentry.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    NotfoundComponent,
    UsersComponent,
    UserentryComponent,
    DeleteuserComponent,
    TaxCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
