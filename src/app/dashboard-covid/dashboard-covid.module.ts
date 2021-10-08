import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCovidComponent } from './dashboard-covid.component';
import { DadosService } from './dados.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardCovidComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DashboardCovidComponent
  ],
  providers: [
    DadosService
  ]
})
export class DashboardCovidModule { }
