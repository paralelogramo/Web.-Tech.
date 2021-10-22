import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import { StudenthomeComponent } from './components/student/components/studenthome/studenthome.component';
import { EventsComponent } from './components/student/components/events/events.component';
import { CoursesComponent } from './components/student/components/courses/courses.component';
import { EditprofileComponent } from './components/student/components/editprofile/editprofile.component';
import { AdminhomeComponent } from './components/admin/adminhome/adminhome.component';
import { AdmineventsComponent } from './components/admin/adminevents/adminevents.component';
import { AdminaccountsComponent } from './components/admin/adminaccounts/adminaccounts.component';
import { AdmindependenciesComponent } from './components/admin/admindependencies/admindependencies.component';
import { ProfessorhomeComponent } from './components/professor/professorhome/professorhome.component';
import { ProfessorcoursesComponent } from './components/professor/professorcourses/professorcourses.component';
import { ProfessoreventsComponent } from './components/professor/professorevents/professorevents.component';
import { ProfessorhelpComponent } from './components/professor/professorhelp/professorhelp.component';
import { OperativehomeComponent } from './components/operative/operativehome/operativehome.component';
import { OperiveeventsComponent } from './components/operative/operiveevents/operiveevents.component';
import { OperiveregistersComponent } from './components/operative/operiveregisters/operiveregisters.component';
import { OperivehelpComponent } from './components/operative/operivehelp/operivehelp.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signin' },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'student/home', component: StudenthomeComponent },
  { path: 'student/myevents', component: EventsComponent  },
  { path: 'student/mycourses', component: CoursesComponent },
  { path: 'student/editprofile', component: EditprofileComponent },
  { path: 'admin/home', component: AdminhomeComponent },
  { path: 'admin/accounts', component: AdminaccountsComponent },
  { path: 'admin/dependencies', component: AdmindependenciesComponent },
  { path: 'admin/events', component: AdmineventsComponent },
  { path: 'operative/home', component: OperativehomeComponent },
  { path: 'operative/events', component: OperiveeventsComponent },
  { path: 'operative/registers', component: OperiveregistersComponent },
  { path: 'operative/help', component: OperivehelpComponent },
  { path: 'professor/home', component: ProfessorhomeComponent },
  { path: 'professor/events', component: ProfessoreventsComponent },
  { path: 'professor/courses', component: ProfessorcoursesComponent },
  { path: 'professor/help', component: ProfessorhelpComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    StudenthomeComponent,
    EventsComponent,
    CoursesComponent,
    EditprofileComponent,
    AdminhomeComponent,
    AdmineventsComponent,
    AdminaccountsComponent,
    AdmindependenciesComponent,
    ProfessorhomeComponent,
    ProfessorcoursesComponent,
    ProfessoreventsComponent,
    ProfessorhelpComponent,
    OperativehomeComponent,
    OperiveeventsComponent,
    OperiveregistersComponent,
    OperivehelpComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
