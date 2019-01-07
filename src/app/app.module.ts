import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from "@angular/core";
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

import { AppComponent } from './app.component';

import { CapitalizadoPipe } from "./pipes/capitalizado.pipe";
import { SafeBrowserPipe } from './pipes/safe-browser.pipe';
import { MaskPasswordPipe } from './pipes/mask-password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    SafeBrowserPipe,
    MaskPasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
