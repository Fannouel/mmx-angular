import { Component, Inject, Input, LOCALE_ID } from '@angular/core';
import { MmxStaticConfigService } from '../../services/mmx-static-config.service';
import { MmxImageComponent } from '../mmx-image/mmx-image.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mmx-theme-world',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MmxImageComponent,
  ],
  templateUrl: './mmx-theme-world.component.html',
  styleUrl: './mmx-theme-world.component.scss'
})
export class MmxThemeWorldComponent {
  @Input() public environment: any = {};
  @Input() public imagesURL: string = "";
  public themeWorld:any = [];
  public convertSizeForSmallScreen:any  = {
    '6': 12,
    '4': 6,
    '3': 6
  }

  constructor(private staticConfig:MmxStaticConfigService, @Inject(LOCALE_ID) public locale: string) {}

  ngOnInit():void {
    this.staticConfig.get('config', this.environment).subscribe({
      next: (config: any) => {
        MmxStaticConfigService.config = config;
        this.themeWorld = config.theme_world;
      },
    });
  }
}
