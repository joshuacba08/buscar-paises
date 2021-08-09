import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';


import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  country!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService:PaisService,
    ) { }

  ngOnInit(): void { //Podremos ejecutar cosas cuando el componente está inicializado

    this.activatedRoute.params
      .pipe( //en lugar de retornar el observable param
        switchMap( ({ id }) => this.paisService.getPaisPorAlpha(id )), tap( console.log ) //retorna el param.id
      )
      .subscribe( country => this.country = country);

    /* ---------------------------- otra alternatica ---------------------------- */
    // this.activatedRoute.params.subscribe( ({ id }) => {
    //   console.log(id);
      
    //   this.paisService.getPaisPorAlpha( id )
    //     .subscribe( pais => {
    //       console.log(pais);
    //     })
    // });

  }

}


/* ---------------------------- Notas Académicas ---------------------------- */
/*
*   ActivatedRoute  => tiene todo lo necesario para suscribirnos a
*                      cualquier cambio del url
*
*   activatedRoute.params => es un observable y puedo   
*   suscribirme a los cambios del parámetro que paso en la url
*   puedo acceder al id con params.id o desdestrucurando { id }
*
*   switchMap => nos permite traer un observable y retornar
*                otro observable
*
*   tap => operador que dispara un efecto secundario
*
*
*
*/