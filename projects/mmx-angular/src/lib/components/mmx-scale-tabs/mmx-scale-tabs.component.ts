import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MmxProductBoxComponent } from '../mmx-product-box/mmx-product-box.component';
import { MmxPaginationComponent } from '../mmx-pagination/mmx-pagination.component';
import { Product, ProductService } from '../../services/mmx-product.service';

@Component({
  selector: 'mmx-scale-tabs',
  standalone: true,
  imports: [
    CommonModule,
    MmxProductBoxComponent,
    MmxPaginationComponent
  ],
  templateUrl: './mmx-scale-tabs.component.html',
  styleUrl: './mmx-scale-tabs.component.scss'
})
export class MmxScaleTabsComponent {
    public products: Product[] = [];
    private _apiParams: [] = [];
    public links!: any;
    public paginations:any = []
    public pageSize = 20;
    public pageNumber = 1;
    public nbProducts:number = 0;
    public loading = true;
    @Input() apiURL:string = '/products';
    @Input () environment:any = [];

    get apiParams(): [] {
        return this._apiParams;
    }
    @Input() set apiParams(value: any) {
        var apiParams = value.apiParams;

        if(value.pageSize) {
            this.pageSize = value.pageSize;
        }

        if(value.pageNumber) {
            this.pageNumber = value.pageNumber;
        }

        if(this.currentScale !== undefined) {
            apiParams = apiParams.concat([{'name': 'scale', 'op': 'has', 'val': {'name': 'name', 'op': '==', 'val': this.currentScale}}]);
        }

        apiParams = this.removeBrandFromApiParams(apiParams);
        apiParams = apiParams.concat([
            {'name': 'brand_id', 'op': 'in', 'val': this.environment.brandIds},
        ]);
        this._apiParams = apiParams;
        this.loading = true;
        this.productService.fetch(this.apiURL, this.apiParams, this.pageNumber, this.pageSize).subscribe({
            next: (data:any) => {
                this.links = data.links;
                this.nbProducts = data.meta.total;
                var nbPages:number = Math.ceil(this.nbProducts / this.pageSize);
                this.paginations = [];
                for(let i = 1; i <= nbPages; i++) {
                    this.paginations.push(i);
                }
                this.products = data.data;
            },
            error: (err: any) => {
                console.log({err})
            },
            complete: () => {
                this.loading = false;
            }
        })
    }

    private removeScaleFromApiParams() {
        this.apiParams = {apiParams: this.apiParams.filter((param:any) => param.name != 'scale')};
    }

    private removeBrandFromApiParams(value:any) {
        return value.filter((param:any) => param.name != 'brand_id');
    }

    public scales = [
        "1:18",
        "1:32",
        "1:35",
        "1:43",
        "1:64",
        "1:87"
    ]
    @Input() public currentScale:string | undefined = undefined;
    @Output() changeScaleEvent = new EventEmitter<string>();


    constructor(private productService:ProductService) {}

    public changeScale(scale: string | undefined) {
        this.pageNumber = 1;
        this.currentScale = scale;
        this.removeScaleFromApiParams();
        this.changeScaleEvent.emit(scale);
    }
}
