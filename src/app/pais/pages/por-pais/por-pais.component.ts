import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  countries: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencia: boolean = false;

  constructor( private paisService: PaisService) {

  }

  search( termino: string ) {

    this.hayError = false;
    this.termino = termino;


    this.paisService.searchCountry( this.termino )
      .subscribe( ( countries ) => {
        console.log( countries );
        this.countries = countries;
      }, (err) => {
        this.hayError = true;
        this.countries = [];
      });

  }

  sugerencias( termino: string ) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia = true;
    
    this.paisService.searchCountry( termino )
      .subscribe( countries => this.paisesSugeridos = countries.splice(0,5),
        (err) => this.paisesSugeridos = []
      ); 

  }

  buscarSugerido( termino: string ){
    this.search( termino );
    

  }
  


}
