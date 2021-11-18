import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
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
import { AdminmodulesComponent } from './components/admin/adminmodules/adminmodules.component';
import { ProfessorhomeComponent } from './components/professor/professorhome/professorhome.component';
import { ProfessorcoursesComponent } from './components/professor/professorcourses/professorcourses.component';
import { ProfessoreventsComponent } from './components/professor/professorevents/professorevents.component';
import { ProfessorhelpComponent } from './components/professor/professorhelp/professorhelp.component';
import { OperativehomeComponent } from './components/operative/operativehome/operativehome.component';
import { OperiveeventsComponent } from './components/operative/operiveevents/operiveevents.component';
import { OperiveregistersComponent } from './components/operative/operiveregisters/operiveregisters.component';
import { OperivehelpComponent } from './components/operative/operivehelp/operivehelp.component';
import { AdmineditprofileComponent } from './components/admin/admineditprofile/admineditprofile.component';
import { DialogComponent } from './components/admin/adminaccounts/dialog/dialog.component';
import { DialogAddComponent } from './components/admin/admindependencies/dialog-add/dialog-add.component';
import { DialogEditComponent } from './components/admin/admindependencies/dialog-edit/dialog-edit.component';
import { DialogDeleteComponent } from './components/admin/admindependencies/dialog-delete/dialog-delete.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signin' },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'student/home/:id', component: StudenthomeComponent },
  { path: 'student/myevents/:id', component: EventsComponent  },
  { path: 'student/mycourses/:id', component: CoursesComponent },
  { path: 'student/editprofile/:id', component: EditprofileComponent },
  { path: 'admin/home/:id', component: AdminhomeComponent },
  { path: 'admin/accounts/:id', component: AdminaccountsComponent },
  { path: 'admin/dependencies/:id', component: AdmindependenciesComponent },
  { path: 'admin/events/:id', component: AdmineventsComponent },
  { path: 'admin/modules/:id', component: AdminmodulesComponent },
  { path: 'admin/editprofile/:id', component: AdmineditprofileComponent },
  { path: 'operative/home/:id', component: OperativehomeComponent },
  { path: 'operative/events/:id', component: OperiveeventsComponent },
  { path: 'operative/registers/:id', component: OperiveregistersComponent },
  { path: 'operative/help/:id', component: OperivehelpComponent },
  { path: 'professor/home/:id', component: ProfessorhomeComponent },
  { path: 'professor/events/:id', component: ProfessoreventsComponent },
  { path: 'professor/courses/:id', component: ProfessorcoursesComponent },
  { path: 'professor/help/:id', component: ProfessorhelpComponent },
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
    AdminmodulesComponent,
    AdmineditprofileComponent,
    ProfessorhomeComponent,
    ProfessorcoursesComponent,
    ProfessoreventsComponent,
    ProfessorhelpComponent,
    OperativehomeComponent,
    OperiveeventsComponent,
    OperiveregistersComponent,
    OperivehelpComponent,
    DialogComponent,
    DialogAddComponent,
    DialogEditComponent,
    DialogDeleteComponent,    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule
  ],
  exports: [
    RouterModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
