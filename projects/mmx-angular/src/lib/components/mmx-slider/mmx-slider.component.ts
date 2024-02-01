import { CommonModule } from '@angular/common';
import { Component, Inject, Input, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MmxImageComponent } from '../mmx-image/mmx-image.component';
import { MmxStaticConfigService } from '../../services/mmx-static-config.service';

@Component({
  selector: 'mmx-slider',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MmxImageComponent,
  ],
  templateUrl: './mmx-slider.component.html',
  styleUrl: './mmx-slider.component.scss'
})
export class MmxSliderComponent {
  public slideInterval = 5000;
  public slides: any = [];
  @Input() public imagesURL: string = ''
  @Input() public environment: any = {};

  constructor(private staticConfigService:MmxStaticConfigService, @Inject(LOCALE_ID) public locale: string) {}

  ngOnInit(): void {
    this.staticConfigService.get('config', this.environment).subscribe(
      {next: (config:any) => {
        MmxStaticConfigService.config = config;
        this.slides = config.slides;
    }});
  }
}
