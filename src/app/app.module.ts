import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardCovidModule } from './dashboard-covid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardCovidModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
