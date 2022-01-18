import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemoFormComponent} from "./component/demo-form/demo-form.component";
import {DemoInputComponent} from "./component/demo-input/demo-input.component";
import {ProductComponent} from "./component/product/product.component";
import {ListComponent} from "./component/student/list/list.component";
import {DetailComponent} from "./component/student/detail/detail.component";
import {CreateComponent} from "./component/student/create/create.component";

const routes: Routes = [
  {path: 'form', component: DemoFormComponent},
  {path: 'product', component: ProductComponent},
  {path: 'input/:id', component: DemoInputComponent},
  {
    path: 'students',
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'detail',
        component: DetailComponent
      }, {
        path: 'create',
        component: CreateComponent
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
