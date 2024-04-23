
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from '@services/global.service'; // Asegúrate de que la ruta sea correcta
import { virtualRouter } from '@services/virtualRouter.service'; // Asegúrate de que la ruta sea correcta
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(
    private deviceService: DeviceDetectorService,
    public virtualRouter: virtualRouter,
    public global: GlobalService
    ) {}
}
