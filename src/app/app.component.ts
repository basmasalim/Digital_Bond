import { Component } from '@angular/core';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { HomeComponent } from "./features/pages/home/home.component";
import { AboutComponent } from "./features/pages/about/about.component";
import { ProcessComponent } from "./features/pages/process/process.component";
import { ContactComponent } from "./features/pages/contact/contact.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { ReviewsComponent } from "./features/pages/reviews/reviews.component";
import { PageCopyrightComponent } from "./shared/components/page-copyright/page-copyright.component";
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent, AboutComponent, ProcessComponent, ContactComponent, FooterComponent, ReviewsComponent, PageCopyrightComponent, NgxSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Digital_Bond';

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

}
