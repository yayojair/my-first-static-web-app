import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './index.html',
  styleUrls: ['./styles.css']
})
export class AppComponent {
  subir() {
    console.log('Subir tarea');
    // lógica para subir
  }

  eliminar() {
    console.log('Eliminar tarea');
    // lógica para eliminar
  }

  marcarUrgente() {
    console.log('Tarea marcada como urgente');
    // lógica para marcar como urgente
  }
}


