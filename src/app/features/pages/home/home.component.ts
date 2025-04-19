import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BtnPrimaryComponent } from "../../../shared/components/btn-primary/btn-primary.component";
import { CornerbottonComponent } from "../../../shared/components/cornerbotton/cornerbotton.component";

@Component({
  selector: 'app-home',
  imports: [BtnPrimaryComponent, CornerbottonComponent],
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
