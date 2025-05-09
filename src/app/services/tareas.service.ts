import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private apiUrl = 'https://demomiapim.azure-api.net/demomifuction/http_trigger'; // URL expuesta por APIM

  constructor(private http: HttpClient) {}

  crearTarea(tarea: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '9e86fe407f1f466283bf02142dde3366'  // Si usas API Key en APIM
    });

    return this.http.post(this.apiUrl, tarea, { headers });
  }
}
