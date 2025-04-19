import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-cornerbotton',
  imports: [],
  templateUrl: './cornerbotton.component.html',
  styleUrl: './cornerbotton.component.css'
})
export class CornerbottonComponent {
  @Input() bgColor: string = '#ffffff';

  @HostBinding('style.--bgColor') get setBgColor() {
    return this.bgColor;
  }
}
