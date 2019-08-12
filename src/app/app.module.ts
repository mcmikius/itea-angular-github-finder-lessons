import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule, Routes } from '@angular/router';
import { VladComponent } from './vlad/vlad.component';
import { AlexComponent } from './alex/alex.component';

@NgModule({
  declarations: [
    AppComponent,
    VladComponent,
    AlexComponent
  ],
  imports: [
    BrowserModule,
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
