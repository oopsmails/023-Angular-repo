import { CommonModule, DecimalPipe, registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import localeFr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app.routes';
import { HomeModule } from './pages/home/home.module';
import { HomeRoutingModule } from './pages/home/home.routes';
// registerLocaleData(localeDe);
registerLocaleData(localeFr);
// registerLocaleData(localeEn);

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HomeModule,
    HomeRoutingModule,
    AppRoutingModule, // need to be at last, otherwise NotFoundComponent is at front
  ],
  declarations: [],
  exports: [],
  providers: [
    DecimalPipe,
  ],
  bootstrap: [],
})
export class AppModule { }
