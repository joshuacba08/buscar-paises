import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  countries: Country[] = [];

  constructor( private paisService: PaisService) {

  }

  search( termino: string ) {

    this.hayError = false;
    this.termino = termino;


    this.paisService.searchCapital( this.termino )
      .subscribe( ( countries ) => {
        this.countries = countries;
      }, (err) => {
        this.hayError = true;
        this.countries = [];
      });

  }

}
