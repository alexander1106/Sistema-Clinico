import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']  // Cambio de "styleUrl" a "styleUrls"
})
export class RegistroComponent {
  @Output() iniciarRegistro = new EventEmitter<void>();

  registro(): void {
    this.iniciarRegistro.emit();  // Emite un evento cuando se hace clic en el botón de registro
  }
}
