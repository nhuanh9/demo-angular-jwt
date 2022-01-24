import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListStudentComponent} from "./component/student/list-student/list-student.component";
import {CreateStudentComponent} from "./component/student/create-student/create-student.component";
import {ListClasssComponent} from "./component/classs/list-classs/list-classs.component";
import {CreateClasssComponent} from "./component/classs/create-classs/create-classs.component";
import {DetailClasssComponent} from "./component/classs/detail-classs/detail-classs.component";

const routes: Routes = [
  {
    path: 'students',
    component: ListStudentComponent
  }, {
    path: 'create-student',
    component: CreateStudentComponent
  }, {
    path: 'classes',
    children: [
      {
        path:'',
        component: ListClasssComponent
      },
      {
        path:'create',
        component: CreateClasssComponent
      },
      {
        path: 'view',
        component: DetailClasssComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
