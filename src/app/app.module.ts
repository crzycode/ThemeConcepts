import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveLinksModule } from '@bitbeast/active-links';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActiveLinksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
