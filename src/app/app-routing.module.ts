import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { EpisodiosComponent } from './pages/episodios/episodios.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'personajes', component: PersonajeComponent },
  { path: 'episodios', component: EpisodiosComponent },
  { path: '', component: PersonajeComponent },
  { path: 'personajes/:page', component: PersonajeComponent },
  { path: '**', component: PersonajeComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
