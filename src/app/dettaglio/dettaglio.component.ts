import { Component } from '@angular/core';
import { Aula } from '../model/aula';
import { AulaService } from '../service/aula.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent {
  aulaDettaglio?: Aula;

  constructor(private aulaService: AulaService) {
    this.aulaService.aulaSelectedChanged.subscribe((selected) => this.aulaDettaglio = selected);
  }
  aulaDettaglio?: Aula;

  constructor(private aulaService: AulaService) {
    this.aulaService.aulaSelectedChanged.subscribe((selected) => this.aulaDettaglio = selected);
  }
}
