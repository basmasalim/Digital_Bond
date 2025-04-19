import { Component, Input } from '@angular/core';
import { VerticalLineComponent } from '../vertical-line/vertical-line.component';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'app-text-block-with-line',
  imports: [VerticalLineComponent, BtnPrimaryComponent],
  templateUrl: './text-block-with-line.component.html',
  styleUrl: './text-block-with-line.component.css'
})
export class TextBlockWithLineComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
