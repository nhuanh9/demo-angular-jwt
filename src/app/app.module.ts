import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStudentComponent } from './component/student/list-student/list-student.component';
import { CreateStudentComponent } from './component/student/create-student/create-student.component';
import { ListClasssComponent } from './component/classs/list-classs/list-classs.component';
import { CreateClasssComponent } from './component/classs/create-classs/create-classs.component';
import { DetailClasssComponent } from './component/classs/detail-classs/detail-classs.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { EditStudentComponent } from './component/student/edit-student/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentComponent,
    CreateStudentComponent,
    ListClasssComponent,
    CreateClasssComponent,
    DetailClasssComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
