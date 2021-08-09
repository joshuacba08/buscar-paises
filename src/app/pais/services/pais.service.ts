import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams() {
    return new HttpParams().set( 'fields', 'name;capital;alpha2Code;flag;population' );
  }

  constructor( private http: HttpClient ) { }

  searchCountry( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }
  
  searchCapital( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  getPaisPorAlpha( id: string ): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ id }`;

    return this.http.get<Country>( url );
  }

  buscarRegion( region: string ): Observable<Country[]> {

    const httpParams = new HttpParams( )
      .set('fields', '');

    const url = `${ this.apiUrl }/region/${ region }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } )      
  }


}


/* ---------------------------- Notas Académicas ---------------------------- */
//una forma de manejar los errores desde el service, 
//por el momento estamos manejando el error desde por-pais.components.ts
/*

-----------------------------------------------------
import { catchError } from 'rxjs/operators';

-----------------------------------------------------
return this.http.get( url )        .pipe(
                catchError( err => of([]))  //atrapa el error y genera un arreglo vacío
              )
*/