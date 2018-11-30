import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AutoresComponent } from './autores/autores.component';
import { HttpClientModule } from '@angular/common/http';
// Modulo para el manejo de rutas
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetalleAutorComponent } from './detalle-autor/detalle-autor.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AutoresComponent
  },
  {
    path: 'autores/:id',
    component: DetalleAutorComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AutoresComponent,
    PageNotFoundComponent,
    DetalleAutorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
