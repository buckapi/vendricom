import { Injectable } from '@angular/core';
import { AuthRESTService } from './auth-rest.service';
@Injectable({
  providedIn: 'root'
})
export class virtualRouter {
  constructor(
    public authRESTService:AuthRESTService
  ){

  }
   routerActive:string= "user-home";
   setRoute(route: string) {
    const userType = this.authRESTService.getType();
  
    switch (route) {
      case 'home':
        switch (userType) {
          case 'admin':
            this.routerActive = 'admin-home';
            break;
          case 'employe':
            this.routerActive = 'user-home';
            break;
          default:
            console.error('Tipo de usuario no reconocido');
        }
        break;
      case 'payments':
        switch (userType) {
          case 'admin':
            this.routerActive = 'admin-payments';
            break;
          case 'employe':
            this.routerActive = 'user-payments';
            break;
          default:
            console.error('Tipo de usuario no reconocido');
        }
        break;
      case 'settings':
        this.routerActive = 'settings';
          break;
      case 'requests':
        switch (userType) {
          case 'admin':
            this.routerActive = 'admin-requests';
            break;
          case 'employe':
            this.routerActive = 'user-requests';
            break;
          default:
            console.error('Tipo de usuario no reconocido');
        }
        break;
      default:
        console.error('Ruta no reconocida');
    }
  }
  
}
