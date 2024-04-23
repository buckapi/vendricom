import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {

  private apiUrl = 'http://localhost:8090/api/collections/images/records';

  constructor(private http: HttpClient) { }

  uploadImage(image: File) {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('type', 'avatar');
    
    // Obtenemos el usuario actual del localStorage
    const currentUserString = localStorage.getItem('currentUser');

    if (currentUserString) {
      const currentUser = JSON.parse(currentUserString);
      const userId = currentUser.id;      
      // Agregamos el ID del usuario al formData
      formData.append('userId', userId);
    } else {
      console.error('No se pudo obtener el usuario actual del localStorage');
      // Manejar el caso en el que no se pueda obtener el usuario actual
    }

    return this.http.post<any>(this.apiUrl, formData);
  }
}
