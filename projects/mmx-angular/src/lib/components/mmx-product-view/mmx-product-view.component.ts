import { Component, Inject, Input, LOCALE_ID } from '@angular/core';
import { Product, ProductService } from '../../services/mmx-product.service';
import { ActivatedRoute } from '@angular/router';
import { MmxProductSliderComponent } from '../mmx-product-slider/mmx-product-slider.component';
import { MmxSocialComponent } from '../mmx-social/mmx-social.component';
import { CommonModule } from '@angular/common';
import { RedZoomModule } from 'ngx-red-zoom';
import { SafePipe } from '../../pipes/safe.pipe';
@Component({
  selector: 'mmx-product-view',
  standalone: true,
  imports: [
    CommonModule,
    MmxProductSliderComponent,
    MmxSocialComponent,
    SafePipe,
    RedZoomModule
  ], 
  templateUrl: './mmx-product-view.component.html',
  styleUrl: './mmx-product-view.component.scss'
})
export class MmxProductViewComponent {
  public _product: Product = {} as Product;
    public loading: boolean = true;
    public target: string = '';
    public images: string[] = [];
    public displayedImages: any;
    @Input() public imagesURL: string = '';
    @Input() public environment:any = [];
    public productsImageURL  = this.imagesURL + '/products/';
    public imageIndex = 0;
    public sliderTitle = '';
    public sliderAPIParams:any = undefined;
    public isInCatalogue = false;

    @Input()
    set product(product: Product) {
        this._product = product;
        try {
            product.content_translations = JSON.parse(product.content_translations);
        } catch {
        }
        this.images = Array.apply(null, new Array(product.nb_images + 1)).map((x,i)=>this.getUrl(i));
        this.images.shift();
        if(!this.images.length) {
            this.images.push(`${this.environment.imagesURL}/website_assets/schuco/no-picture.jpg`)
        }
        this.imageIndex = 0;
        this.displayedImages = this.images.slice(this.imageIndex, this.imageIndex + 4);
        this.setTarget(this.displayedImages[0]);
    }

    get product(): Product {
        return this._product;
    }

    constructor(
        private productService:ProductService,
        private route:ActivatedRoute,
        @Inject(LOCALE_ID) public locale: string) {}

    ngOnInit() {
        if (this.product != {} as Product) {

            this.route.paramMap.subscribe(
                params => {
                    var productId = parseInt(params.get('productId') || '');
                    this.loading = true;
                    if (productId) {
                        this.productService.one(productId).subscribe({
                            next: (data:any) => {
                                this.product = data['data'] as Product;
                                this.prepareSlider();
                            },
                            complete: () => {
                                this.loading = false;
                            }
                        });
                    }
                }
            );
        } else {
            this.loading = false;
        }
    }

    private  getUrl(i: string | number):string {
        if(!this.product) {
            return '';
        }
        return this.productsImageURL + this.product.code + '/' + this.product.code + '-' + i + '-thumb.jpg';
    }

    public setTarget(target:any):void {
        this.target = target.replace('-thumb', '');
    }

    public onSwipeRight(event:Event):void {
        let index = this.images.indexOf(this.target);
        if(index > 0) {
            this.setTarget(this.images[index - 1]);
        }
    }

    public onSwipeLeft(event:Event):void {
        let index = this.images.indexOf(this.target);
        if(index < this.images.length - 1) {
            this.setTarget(this.images[index + 1]);
        }
    }

    public backward() {
        if(this.imageIndex > 0) {
            this.imageIndex -= 1;
            this.displayedImages = this.images.slice(this.imageIndex, this.imageIndex + 4);
        }
    }

    public forward() {
        if(this.imageIndex < this.images.length - 1) {
            this.imageIndex += 1;
            this.displayedImages = this.images.slice(this.imageIndex, this.imageIndex + 4);
        }
    }


    private prepareSlider() {
        var state = this.product.webcatalogue ? this.product.webcatalogue.state : null;
        if(state == 'INDEVELOPMENT') {
            this.sliderTitle = $localize`:@@indevelopment:In Development`;
        } else if(state == 'COMINGSOON') {
            this.sliderTitle = $localize`:@@comingsoon:Coming Soon`;
        } else if(state == 'LATESTMODELS') {
            this.sliderTitle = $localize`:@@latestmodels:Latest Models`;
        }
        if(['INDEVELOPMENT', 'COMINGSOON', 'LATESTMODELS'].includes(state)) {
            this.sliderAPIParams = [
                {'name': 'webcatalogue', 'op': 'has', 'val': {'name': 'state', 'op': '==', 'val': state}},
                {'name': 'product_id', 'op': '!=', 'val': this.product.product_id}
            ];
        }
    }

    public onImageError(event:any) {
        var noImageURL = this.environment.imagesURL  + "/website_assets/schuco/no-picture.jpg";
        event.target.src = noImageURL;
        var parent = event.target.parentElement
        for(let source of parent.querySelectorAll('source')) {
        source.srcset = noImageURL;
        }
    }

    ngOnDestroy(): void {
        this.sliderAPIParams = undefined;
    }

    onNbProductFetchEvent(event:any, state:string) {
        if(state == "CATALOGUE") {
        this.isInCatalogue = true;
        }
    }

}
