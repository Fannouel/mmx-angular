import { Component, Input } from '@angular/core';

@Component({
  selector: 'mmx-faqitem',
  standalone: true,
  imports: [],
  templateUrl: './mmx-faqitem.component.html',
  styleUrl: './mmx-faqitem.component.scss'
})
export class MmxFAQitemComponent {
  @Input() public question!: string;
  @Input() public answer!: string;
  @Input() public index!: number;
  @Input() public accordionParent!: string;
  @Input() public open: boolean = false;
}
