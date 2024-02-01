import { Component, Input } from '@angular/core';

@Component({
  selector: 'mmx-image',
  standalone: true,
  imports: [],
  templateUrl: './mmx-image.component.html',
  styleUrl: './mmx-image.component.scss'
})
export class MmxImageComponent {
  @Input() public imagesURL: string = ''
  @Input() public src: string = '';
  @Input() public alt: string = '';
  @Input() public class: string = '';
  @Input() public width: string = '';
  @Input() public height: string = '';
}
