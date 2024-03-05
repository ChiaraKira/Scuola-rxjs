import { Component } from '@angular/core';
import { AulaService } from '../service/aula.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  classe:number = 1;
  sezione:string = '';
  isLaboratorio:boolean = false;
  rappresentante:string = '';
  mascotteImg:string = '';

constructor(private aulaService : AulaService){}

  aggiungiAula(){
    this.aulaService.addAula(Number(this.classe), this.sezione.toUpperCase(), this.isLaboratorio, this.rappresentante, this.mascotteImg);
    this.reset();
  }

  reset(){
    this.classe = 1;
    this.sezione = '';
    this.isLaboratorio = false;
    this.rappresentante = '';
    this.mascotteImg = '';

  }

  classe: number = 1;
  sezione: string = '';
  isLaboratorio: boolean = false;
  rappresentante: string = '';
  mascotteImg: string = '';

  constructor(private aulaService: AulaService) { }

  newAula() {
    this.aulaService.addAula(
      this.classe,
      this.sezione.toUpperCase(),
      this.isLaboratorio,
      this.rappresentante,
      this.mascotteImg
    );
    this.reset();
  }

  reset() {
    this.classe = 1;
    this.sezione = '';
    this.isLaboratorio = false;
    this.rappresentante = '';
    this.mascotteImg = '';
  }
}
