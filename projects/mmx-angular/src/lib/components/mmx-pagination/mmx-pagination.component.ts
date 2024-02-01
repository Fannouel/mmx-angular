import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mmx-pagination',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './mmx-pagination.component.html',
  styleUrl: './mmx-pagination.component.scss'
})
export class MmxPaginationComponent {
  @Input() pageNumber!: number;
  @Input() paginations!: any;
  @Input() links!: any;
}
