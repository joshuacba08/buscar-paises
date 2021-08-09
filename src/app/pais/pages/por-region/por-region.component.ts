import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  countries: Country[] = [];

  constructor( private paiseService: PaisService ) { }

  getClaseCSS( region: string ): string {
    return (region === this.regionActiva ) ?  'btn btn-primary me-2' : 'btn btn-outline-primary me-2';
  }
  activarRegion( region: string ) {

    if( region === this.regionActiva ) {return; } //hace que si presione la region que está activada, no se ejecute nada.

    this.regionActiva = region;
    this.countries = [];
    this.paiseService.buscarRegion( region )
      .subscribe( countries => {
        this.countries = countries;
      })
  }
  

}
