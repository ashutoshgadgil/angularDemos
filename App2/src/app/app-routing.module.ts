import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UsersComponent } from './users/users.component';
import { UserentryComponent } from './userentry/userentry.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'users',component:UsersComponent},
  {path:'userentry',component:UserentryComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
