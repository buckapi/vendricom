import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

import { virtualRouter } from './services/virtualRouter.service'; // Asegúrate de que la ruta sea correcta
import { GlobalService } from './services/global.service'; // Asegúrate de que la ruta sea correcta
import { ScriptService } from './services/script.service';

import { NgxSpinnerModule } from 'ngx-spinner';
import { TopNavbarComponent } from './components/ui/top-navbar/top-navbar.component';
import { VerticalNavComponent } from './components/ui/vertical-nav/vertical-nav.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { LoginComponent } from './components/login/login.component';
import { UserPaymentsComponent } from './components/user-payments/user-payments.component';
import { UserRequestsComponent } from './components/user-requests/user-requests.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FloatyComponent } from './components/shared/floaty/floaty.component';
import { SmallNavigationComponent } from './components/shared/small-navigation/small-navigation.component';
import { NavigationWidgetComponent } from './components/shared/navigation-widget/navigation-widget.component';
import { NavigationMobileComponent } from './components/shared/navigation-mobile/navigation-mobile.component';
import { ChatWidgetComponent } from './components/shared/chat-widget/chat-widget.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgxSpinnerModule,
    CommonModule, 
    RouterOutlet,

    TopNavbarComponent,
    VerticalNavComponent,
    UserHomeComponent,
    AdminHomeComponent,
    UserPaymentsComponent,
    LoginComponent,
    UserRequestsComponent,
    SettingsComponent,
    HeaderComponent,
    FloatyComponent,
    SmallNavigationComponent,
    NavigationWidgetComponent,
    NavigationMobileComponent,
    ChatWidgetComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmployesApp';
  layoutStyle: string = "default";
  deviceInfo: any = null
  constructor(
    private deviceService: DeviceDetectorService,
    public script: ScriptService,
    public virtualRouter: virtualRouter,
    public global: GlobalService
    ) {


      this.script.load(
    
        'script'
      )
      
      .then(() => {
        // console.log('Todos los scripts se cargaron correctamente');
      })
      .catch(error => console.log(error));
      this.global.getConfig();
      this.epicFunction();
      // this.global.isLogin();

    }
    ngOnInit(): void {
      this.global.getConfig().subscribe(
        (data) => {
          this.global.configs = data;
           // Asigna los registros obtenidos a la variable 'registros'
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      );
      this.global.getProducts().subscribe(
        (data) => {
          this.global.products = data.items; // Asigna los registros obtenidos a la variable 'registros'
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      );
      this.global.getMembers().subscribe(
        (data) => {
          this.global.members = data.items; // Asigna los registros obtenidos a la variable 'registros'
          console.log(this.global.members)
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      );
    }
    toggleLayoutStyle() {
      if (this.layoutStyle === "default") {
        this.layoutStyle = "collapsed";
      } else {
        this.layoutStyle = "default";
      }
    }
    epicFunction() {
      this.deviceInfo = this.deviceService.getDeviceInfo();
      const isMobile = this.deviceService.isMobile();
      const isTablet = this.deviceService.isTablet();
      const isDesktopDevice = this.deviceService.isDesktop();
      if (isMobile) {
        this.global.device = "Mobile";
        // console.log("Mobile");
      };
      if (isTablet) {
        this.global.device = "Tablet";
      };
      if (isDesktopDevice) {
        this.global.device = "Desktop";
        // console.log("Desktop");
      };
  
    }
}
