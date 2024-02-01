import { CommonModule } from '@angular/common';
import { Component, Inject, Input, LOCALE_ID } from '@angular/core';
import { MmxSearchBarComponent } from '../mmx-search-bar/mmx-search-bar.component';
import { MmxSelectLocaleComponent } from '../mmx-select-locale/mmx-select-locale.component';
import { MmxStaticConfigService } from '../../services/mmx-static-config.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mmx-navigation',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MmxSelectLocaleComponent,
    MmxSearchBarComponent,
  ],
  templateUrl: './mmx-navigation.component.html',
  styleUrl: './mmx-navigation.component.scss'
})
export class MmxNavigationComponent {
  @Input() public imagesURL: string = ''
  @Input() public environment: any;
  public categories: any[] = [];
  public loading = true;

  constructor(private staticConfigService: MmxStaticConfigService, @Inject(LOCALE_ID) public locale: string) {}

  ngOnInit() {
    this.loading = true;
    this.staticConfigService.get('config', this.environment).subscribe({
      next: (config: any) => {
        MmxStaticConfigService.config = config;
        this.categories = config.categories as any[];
        // Sort categories by order.
        this.categories.sort((a, b) => a.order - b.order);
        for(let category of this.categories) {
          // Sort children by name
          if(category.sort == true) {
            (category.children as any[]).sort((a, b) => a.name[this.locale].localeCompare(b.name[this.locale]));
          }
        }
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  public stopPropagation(event: any) {
    // Prevent dropdown from closing when clicking on a link.
    event.stopPropagation();
  }
}
