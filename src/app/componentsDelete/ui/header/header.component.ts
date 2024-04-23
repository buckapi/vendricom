import { Component } from '@angular/core';
import { HeaderhomeComponent } from './headerhome/headerhome.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderhomeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
