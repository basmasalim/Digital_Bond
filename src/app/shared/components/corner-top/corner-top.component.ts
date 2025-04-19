import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-corner-top',
  imports: [],
  templateUrl: './corner-top.component.html',
  styleUrl: './corner-top.component.css'
})
export class CornerTopComponent {
  @Input() bgColor: string = '#ffffff';

  @HostBinding('style.--bgColor') get setBgColor() {
    return this.bgColor;
  }
}
