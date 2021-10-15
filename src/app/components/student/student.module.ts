import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { CoursesComponent } from './components/courses/courses.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { EventsComponent } from './components/events/events.component';



@NgModule({
  declarations: [
    StudentComponent,
    CoursesComponent,
    EditprofileComponent,
    EventsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }
