import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxMousetrapModule} from 'projects/ngx-mousetrap/src/lib/ngx-mousetrap.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMousetrapModule.forRoot(),
    ClarityModule,
    BrowserAnimationsModule,
    NgxMousetrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
