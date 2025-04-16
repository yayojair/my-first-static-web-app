import { Component } from '@angular/core';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',   // este es el archivo correcto
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private tareasService: TareasService) {}

  subir() {
    const nuevaTarea = {
      titulo: 'Leer documentación',
      urgente: false
    };

    this.tareasService.crearTarea(nuevaTarea).subscribe({
      next: res => console.log('Tarea creada:', res),
      error: err => console.error('Error:', err)
    });
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


