import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStudentComponent } from './component/student/list-student/list-student.component';
import { CreateStudentComponent } from './component/student/create-student/create-student.component';
import { ListClasssComponent } from './component/classs/list-classs/list-classs.component';
import { CreateClasssComponent } from './component/classs/create-classs/create-classs.component';
import { DetailClasssComponent } from './component/classs/detail-classs/detail-classs.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentComponent,
    CreateStudentComponent,
    ListClasssComponent,
    CreateClasssComponent,
    DetailClasssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
