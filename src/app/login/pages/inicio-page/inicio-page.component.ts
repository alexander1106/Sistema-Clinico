import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.component.html',
  styleUrls: ['./inicio-page.component.css']  // Cambio de "styleUrl" a "styleUrls"
})
export class InicioPageComponent {
  mostrarComponenteRegistro = false;
  mostrarComponenteIniciar = true;

  mostrarRegistro() {
    this.mostrarComponenteRegistro = true;
    this.mostrarComponenteIniciar = false; // Oculta el formulario de inicio de sesión
  }

  mostrarIncio(){
    this.mostrarComponenteIniciar = true;
    this.mostrarComponenteRegistro = false; // Oculta el formulario de registro
  }
}
