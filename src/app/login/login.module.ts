import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ContImgComponent } from './components/cont-img/cont-img.component';

@NgModule({
  declarations: [
    InicioPageComponent,
    InicioSesionComponent,
    RegistroComponent,
    ContImgComponent,
  ],
  exports:[
    InicioPageComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class LoginModule { }
