import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BtnPrimaryComponent } from "../../../shared/components/btn-primary/btn-primary.component";
import { CornerComponent } from "../../../shared/components/corner/corner.component";

@Component({
  selector: 'app-home',
  imports: [BtnPrimaryComponent, CornerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private router: Router,
  ) { }

  navigateToContact(): void {
    this.router.navigate(['/contact'], { fragment: 'contact' });
  }
  navigateToAbout(): void {
    this.router.navigate(['/about'], { fragment: 'about' });
  }
}
