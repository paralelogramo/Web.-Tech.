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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signin' },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'student/home', component: StudenthomeComponent },
  { path: 'student/myevents', component: EventsComponent  },
  { path: 'student/mycourses', component: CoursesComponent },
  { path: 'student/editprofile', component: EditprofileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    StudenthomeComponent,
    EventsComponent,
    CoursesComponent,
    EditprofileComponent
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
