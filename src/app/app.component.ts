import { Component } from '@angular/core';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { HomeComponent } from "./features/pages/home/home.component";
import { AboutComponent } from "./features/pages/about/about.component";
import { ProcessComponent } from "./features/pages/process/process.component";
import { ContactComponent } from "./features/pages/contact/contact.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { ReviewsComponent } from "./features/pages/reviews/reviews.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent, AboutComponent, ProcessComponent, ContactComponent, FooterComponent, ReviewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Digital_Bond';
}
