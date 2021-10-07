import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCovidComponent } from './dashboard-covid.component';
import { DadosService } from './dados.service';



@NgModule({
  declarations: [
    DashboardCovidComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardCovidComponent
  ],
  providers: [
    DadosService
  ]
})
export class DashboardCovidModule { }
