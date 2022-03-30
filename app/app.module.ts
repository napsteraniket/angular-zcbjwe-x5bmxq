import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationModule } from '@progress/kendo-angular-notification';

import 'hammerjs';

import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, NotificationModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
