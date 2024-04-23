import { Component } from '@angular/core';
import { MainfooterComponent } from './mainfooter/mainfooter.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MainfooterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
