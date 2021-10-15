import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperativeComponent } from './operative.component';
import { OperativehomeComponent } from './components/operativehome/operativehome.component';
import { EventsComponent } from './components/events/events.component';
import { RecordsComponent } from './components/records/records.component';



@NgModule({
  declarations: [
    OperativeComponent,
    OperativehomeComponent,
    EventsComponent,
    RecordsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OperativeModule { }
