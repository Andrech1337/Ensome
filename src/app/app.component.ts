import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { HomeComponent } from '@pages/home/home.component';
import { FooterComponent } from '@components/footer/footer.component';
import { ContactComponent } from '@pages/contact/contact.component';
import { ServicesComponent } from '@pages/services/services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    ServicesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'hello-world';
}
