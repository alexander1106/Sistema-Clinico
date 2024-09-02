import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';  // Importa Router desde @angular/router


@Component({
  selector: 'contenedor-inicio-sesion-form',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {

  constructor(private router: Router) {}

  onRegistroExitoso() {
    // Redirige a la pantalla principal
    this.router.navigate(['/principal']);
  }
  
  @Output() iniciarSesion = new EventEmitter<void>();

  login(): void {
    this.iniciarSesion.emit();  // Emite un evento cuando se hace clic en el botón
  }
}
