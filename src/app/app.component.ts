import { Component } from '@angular/core';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',   // este es el archivo correcto
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private tareasService: TareasService) {}
  limpiarCampos() {
    (document.getElementById('descripcion') as HTMLInputElement).value = '';
    (document.getElementById('prioridad') as HTMLSelectElement).value = 'Baja';
    (document.getElementById('fecha') as HTMLInputElement).value = '';
  }
  subir() {
    const descripcion = (document.getElementById("descripcion") as HTMLInputElement).value;
    const prioridad = (document.getElementById("prioridad") as HTMLSelectElement).value;
    const fecha = (document.getElementById("fecha") as HTMLInputElement).value;

    const tarea = {
      descripcion,
      prioridad,
      fechaLimite: fecha
    };
    this.limpiarCampos()
    this.tareasService.crearTarea(tarea).subscribe({
      next: res => console.log('Tarea creada:', res),
      error: err => console.error('Error:', err)
    });
  }
/*
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
  }*/
}


