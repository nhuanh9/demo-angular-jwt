import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { DemoInputComponent } from './demo-input/demo-input.component';
import { DemoInputObjComponent } from './demo-input-obj/demo-input-obj.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DemoFormComponent } from './demo-form/demo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoPipeComponent,
    DemoInputComponent,
    DemoInputObjComponent,
    DemoFormComponent
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
