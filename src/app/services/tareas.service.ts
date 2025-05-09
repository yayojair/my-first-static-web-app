import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private apiUrl = 'https://demomiapim.azure-api.net/demomifunction/http_trigger'; // URL expuesta por APIM

  constructor(private http: HttpClient) {}

  crearTarea(tarea: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': 'dc63c767088743978b2c2ef81ffec533'  // Si usas API Key en APIM
    });

    return this.http.post(this.apiUrl, tarea, { headers });
  }
}
