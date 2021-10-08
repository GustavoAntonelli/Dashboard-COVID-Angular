import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MonthlyCases } from './dashboard.model';

@Injectable()
export class DadosService {
  constructor() { }

  state = new Subject<any>();
  
  months: string[] = ["Junho", "Julho", "Agosto", "Setembro"]

  data: MonthlyCases[] = this.months.map((month) => new MonthlyCases(month, 10))
  
  listar(): void{
    this.obterDados()
  }

  setNovoCasos(month: string, new_cases:number):void {
    this.data.forEach(mes => {
      if (mes.month == month) {
        mes.cases = new_cases
      }
    })
    this.obterDados()
  }

  obterDados() {
    this.state.next(this.data)
  }

}