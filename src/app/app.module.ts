import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FullCalendarSharedModule } from './shared/fullcalendar/fullcalendarshared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarSharedModule //the own shared module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
