import { Component, EventEmitter, HostListener, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductService } from '../../services/mmx-product.service';
import { array_chunk } from '../tools/helper';
import { CommonModule } from '@angular/common';
import { MmxProductBoxComponent } from '../mmx-product-box/mmx-product-box.component';

@Component({
  selector: 'mmx-product-slider',
  standalone: true,
  imports: [
    CommonModule,
    MmxProductBoxComponent
  ],
  templateUrl: './mmx-product-slider.component.html',
  styleUrl: './mmx-product-slider.component.scss'
})
export class MmxProductSliderComponent implements OnInit, OnDestroy, OnChanges{
  public slideInterval = 5000;
  public productsRow: any;
  @Input () title: string = '';
  @Input () componentId: string = '';
  @Input () alternate = false;
  @Input () apiParams:any = [];
  @Input () environment:any = [];
  private chunkSize = window.innerWidth < 960 ? 2 : 4;
  private productData:any = undefined;
  @Output() nbProductFetchEvent = new EventEmitter<string>();


  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    var params = [
      {'name': 'brand_id', 'op': 'in', 'val': this.environment.brandIds},
    ];
    params = params.concat(this.apiParams);
    this.productService.fetch('/products', params, 1, 40, this.environment).subscribe({
      next: (data:any) => {
        this.productData = data.data;
        // send the number of product fetched to the parent component
        if(this.productData) {
          this.nbProductFetchEvent.emit(this.productData.length);
        }
        this.buildProductRow();
      },
      error: (err) => {
      }
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['apiParams']) {
      if(changes['apiParams'].currentValue != changes['apiParams'].previousValue) {
        this.ngOnInit();
      }
    }
  }

  ngOnDestroy() {
    this.productData = undefined;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    var chunkSize = event.target.innerWidth < 960 ? 2 : 4;
    if(chunkSize != this.chunkSize) {
      this.chunkSize = chunkSize;
      this.buildProductRow();
    }
  }

  public buildProductRow() {
    if(this.productData !== undefined) {
      this.productsRow = array_chunk(this.productData, this.chunkSize);
    }
  }
}
