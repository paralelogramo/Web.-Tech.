import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { DependenciesComponent } from './components/dependencies/dependencies.component';
import { ModulesComponent } from './components/modules/modules.component';
import { EventsComponent } from './components/events/events.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminhomeComponent,
    AccountsComponent,
    DependenciesComponent,
    ModulesComponent,
    EventsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
