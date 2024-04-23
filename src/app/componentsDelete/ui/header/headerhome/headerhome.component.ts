import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from '@services/global.service'; // Asegúrate de que la ruta sea correcta
import { virtualRouter } from '@services/virtualRouter.service'; // Asegúrate de que la ruta sea correcta
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-headerhome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './headerhome.component.html',
  styleUrl: './headerhome.component.css'
})
export class HeaderhomeComponent {
  constructor(
    private deviceService: DeviceDetectorService,
    public virtualRouter: virtualRouter,
    public global: GlobalService
    ) {}
}
