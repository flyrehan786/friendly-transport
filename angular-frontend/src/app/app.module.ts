import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { RegisterComponent } from './components/pages/auth/register/register.component';
import { UsersComponent } from './components/pages/auth/users/users.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './components/pages/employees/employees-list/employees-list.component';
import { EmployeesNewComponent } from './components/pages/employees/employees-new/employees-new.component';
import { VehiclesNewComponent } from './components/pages/vehicles/vehicles-new/vehicles-new.component';
import { VehiclesListComponent } from './components/pages/vehicles/vehicles-list/vehicles-list.component';
import { CompaniesListComponent } from './components/pages/companies/companies-list/companies-list.component';
import { CompaniesNewComponent } from './components/pages/companies/companies-new/companies-new.component';
import { VehiclesInsurranceListComponent } from './components/pages/vehicles/vehicles-insurrance-list/vehicles-insurrance-list.component';
import { VehiclesInsurranceNewComponent } from './components/pages/vehicles/vehicles-insurrance-new/vehicles-insurrance-new.component';
import { VehiclesInspectionListComponent } from './components/pages/vehicles/vehicles-inspection-list/vehicles-inspection-list.component';
import { VehiclesInspectionNewComponent } from './components/pages/vehicles/vehicles-inspection-new/vehicles-inspection-new.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    HomeComponent,
    EmployeesListComponent,
    EmployeesNewComponent,
    VehiclesNewComponent,
    VehiclesListComponent,
    CompaniesListComponent,
    CompaniesNewComponent,
    VehiclesInsurranceListComponent,
    VehiclesInsurranceNewComponent,
    VehiclesInspectionListComponent,
    VehiclesInspectionNewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'auth/login', component: LoginComponent },
      { path: 'auth/register', component: RegisterComponent },
      { path: 'auth/users', component: UsersComponent },
      { path: 'auth/manage', component: UsersComponent },
      { path: 'employees', component: EmployeesListComponent },
      { path: 'vehicles', component: VehiclesListComponent },
      { path: 'companies', component: CompaniesListComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
