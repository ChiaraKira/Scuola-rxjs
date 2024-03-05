import { Component } from '@angular/core';
import { Aula } from '../model/aula';
import { AulaService } from '../service/aula.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  aule: Aula[];

  constructor(private aulaService: AulaService) {
    this.aule = this.aulaService.getAule();

    this.aulaService.auleChanged.subscribe((updateAule) => {
      this.aule = updateAule;
    })
  }

  onClickDettaglio(aula: Aula) {
    this.aulaService.selectDettaglio(aula);
  }

  removeAula(classe: number, sezione: string) {
    this.aulaService.deleteAula(classe, sezione);

  }
}
