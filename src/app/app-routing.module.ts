import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";



const routes: Routes = [
    {
        path: '', //la dirección original o principal http://localhost
        component: PorPaisComponent,
        pathMatch: 'full',   //sería como un exact to
    },
    {
        path: 'region',  //cuando alguien entre en localhost:4200/region
        component: PorRegionComponent,
    },
    {
        path: 'capital',
        component: PorCapitalComponent,
    },
    {
        path: 'pais/:id',   //para argumentos dinámicos por url  ":"
        component: VerPaisComponent,
    },
    {
        path: '**',   //en el caso de que no coincida con ninguna ruta
        redirectTo:'', // enviará a la ruta principal en este caso aunque puedo poner un componente 404 no found
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes ) //para usar las rutas, forRoot para definir que son rutas principales y por parámetro paso mis rutas.

    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule {

}