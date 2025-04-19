import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-btn-primary',
  imports: [NgStyle, RouterLink],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.css'
})
export class BtnPrimaryComponent {
  @Input() textColor: string = 'white';
  @Input() textColorHover: string = 'var(--color-primary)';
  @Input() bgColor: string = 'var(--color-primary)';
  @Input() bgColorHover: string = 'var(--color-primary)';
  @Input() borderColor: string = 'var(--color-primary)';

  isHovered: boolean = false;

  get currentStyles() {
    return {
      color: this.isHovered ? this.textColorHover : this.textColor,
      backgroundColor: this.isHovered ? this.bgColorHover : this.bgColor,
      borderColor: this.borderColor
    };
  }

}
