import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorComponent } from './professor.component';
import { ProfessorhomeComponent } from './components/professorhome/professorhome.component';
import { CoursesComponent } from './components/courses/courses.component';
import { EventsComponent } from './components/events/events.component';



@NgModule({
  declarations: [
    ProfessorComponent,
    ProfessorhomeComponent,
    CoursesComponent,
    EventsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfessorModule { }
