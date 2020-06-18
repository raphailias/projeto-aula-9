import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaComponent } from './lista/lista.component';
import { ListaInputComponent } from './lista-input/lista-input.component';
import { CursoComponent } from './curso/curso.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'sugestoes', component: SugestoesComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    SugestoesComponent,
    NavbarComponent,
    ListaComponent,
    ListaInputComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
