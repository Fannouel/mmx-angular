import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Scale } from './mmx-scale.service';
import { Category } from './mmx-category.service';

export interface Product {
    product_id: number,
    name: string,
    code: string,
    scale: Scale,
    simplified_categories: Category[],
    nb_images: number,
    webcatalogue: any,
    content_translations: any,
    stock_state: string
}

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    public fetch(apiPath: string, apiParams?:any, pageNumber?:number, pageSize?:number, environment?:any) {
        // if we have params
        var params = new HttpParams();
        if(apiParams){
            params = params.set('filter[objects]', JSON.stringify(apiParams));
        }

        if(pageNumber){
            params = params.set('page[number]', pageNumber.toString());
        }

        if(pageSize){
            params = params.set('page[size]', pageSize.toString());
        }

        return this.http.get<Product[]>(environment.apiURL + apiPath, {params});

    }

    public one(productId: number, apiParams?:any, environment?:any) {
        // if we have params
        var params = new HttpParams();
        if(apiParams){
            params = params.set('filter[objects]', JSON.stringify(apiParams));
        }
        return this.http.get<Product[]>(environment.apiURL + '/products/' + productId.toString(), {params});
    }
}
