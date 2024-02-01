import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../services/mmx-product.service';

@Component({
  selector: 'mmx-product-box',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './mmx-product-box.component.html',
  styleUrl: './mmx-product-box.component.scss'
})
export class MmxProductBoxComponent {
  @Input() product: Product | undefined;
  @Input() public imagesURL: string = ''
  public productsImageURL  = this.imagesURL + '/products/';

  public onImageError(event:any) {
    var noImageURL = this.imagesURL  + "/website_assets/schuco/no-picture-thumb.jpg";
    event.target.src = noImageURL;
    var parent = event.target.parentElement
    for(let source of parent.querySelectorAll('source')) {
      source.srcset = noImageURL;
    }
  }
}
