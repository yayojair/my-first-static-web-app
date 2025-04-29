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
      'Ocp-Apim-Subscription-Key': '48daae1b94104595806de42c1ffd8ba5'  // Si usas API Key en APIM
    });

    return this.http.post(this.apiUrl, tarea, { headers });
  }
}
