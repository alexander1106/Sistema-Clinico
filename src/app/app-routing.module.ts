import { PantallaPrincipalComponent } from './inicio/pages/pantalla-principal/pantalla-principal.component';
import { InicioPageComponent } from './login/pages/inicio-page/inicio-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'registro', component: InicioPageComponent },
  { path: 'principal', component: PantallaPrincipalComponent },
  { path: '', redirectTo: '/registro', pathMatch: 'full' }, // Redirige a 'registro' por defecto
  { path: '**', redirectTo: '/registro' } // Maneja rutas no definidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
