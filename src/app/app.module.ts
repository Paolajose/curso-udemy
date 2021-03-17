import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppPaolaComponent } from './app-paola/app-paola.component';

@NgModule({
  declarations: [
    AppComponent,
    AppPaolaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
