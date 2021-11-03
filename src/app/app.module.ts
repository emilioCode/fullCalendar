import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FullcalendarModule } from './shared/fullcalendar/fullcalendar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FullcalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
