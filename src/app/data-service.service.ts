import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getData() {
    // Der Interceptor fügt den Autorisierungsheader automatisch hinzu
    return this.http.get(environment.apiUrl);
  }
}
