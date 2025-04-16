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
      "nombre": 'laptop',
      "precio": 25000
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
    const tarea = {
      titulo: 'Tarea urgente',
      descripcion: 'Requiere atención inmediata',
      urgente: true
    };

    this.tareasService.crearTarea(tarea).subscribe({
      next: (res) => console.log('Tarea urgente creada:', res),
      error: (err) => console.error('Error al crear urgente:', err)
    });
  }
}


