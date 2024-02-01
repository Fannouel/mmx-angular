import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from './mmx-product.service';

export interface Category {
    category_id: number,
    name: any,
    is_racing: boolean
}

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private environment: any;
    constructor(private http: HttpClient) { }

    public products(categoryId:number, pageSize:number, pageIndex:number) {
        return this.http.get<Product[]>(
            this.environment.apiURL + '/categories/' + categoryId + '/products?sort=-id&page[size]=' +  pageSize + '&page[number]=' + pageIndex);
    }

    public one(categoryId:number) {
        return this.http.get<Category>(this.environment.apiURL + '/categories/' + categoryId);
    }

}