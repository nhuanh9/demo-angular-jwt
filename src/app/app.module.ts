import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoPipeComponent } from './component/demo-pipe/demo-pipe.component';
import { DemoInputComponent } from './component/demo-input/demo-input.component';
import { DemoInputObjComponent } from './component/demo-input-obj/demo-input-obj.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DemoFormComponent } from './component/demo-form/demo-form.component';
import { ProductComponent } from './component/product/product.component';
import { ListComponent } from './component/student/list/list.component';
import { CreateComponent } from './component/student/create/create.component';
import { DetailComponent } from './component/student/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoPipeComponent,
    DemoInputComponent,
    DemoInputObjComponent,
    DemoFormComponent,
    ProductComponent,
    ListComponent,
    CreateComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
