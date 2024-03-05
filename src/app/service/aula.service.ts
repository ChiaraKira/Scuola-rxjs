import { Injectable } from "@angular/core";
import { Aula } from "../model/aula";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AulaService {
    private aule: Aula[] = [
        {
            classe: 3,
            sezione: 'A',
            isLaboratorio: true,
            rappresentante: 'Pino',
            mascotteImg: 'https://i.pinimg.com/originals/5a/cd/1a/5acd1ac7ef07f8d39a6eeba4cdbb83ae.jpg'
        },
        {
            classe: 2,
            sezione: 'B',
            isLaboratorio: false,
            rappresentante: 'Pipis',
            mascotteImg: 'https://i.pinimg.com/originals/6a/5d/18/6a5d18b2e542efba88bf20a58e1b8d1e.gif'
        },
    ];

    public getAule(): Aula[] {
        return this.aule.slice();
    }

    auleChanged = new Subject<Aula[]>();

    addAula(classe: number, sezione: string, isLaboratorio: boolean, rappresentante: string, mascotteImg: string) {
        const aulaEsistente = this.aule.some(x => x.classe === classe && x.sezione === sezione);
        if (aulaEsistente) {
            return false
        }

        const newAula: Aula = {
            classe,
            sezione,
            isLaboratorio,
            rappresentante,
            mascotteImg
        }

        this.aule.push(newAula);
        this.auleChanged.next(this.getAule());
        return true;
    }

    deleteAula(classe: number, sezione: string) {
        let i = this.aule.findIndex(x => x.classe === classe && x.sezione === sezione);
        if (i > -1) {
            this.aule.splice(i, 1);
            this.auleChanged.next(this.getAule());
        }
    }

    aulaSelectedChanged = new Subject<Aula>();
    selectDettaglio(aula: Aula) {
        this.aulaSelectedChanged.next(aula);
    }
};