import { Injectable, ModuleWithProviders } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MmxStaticConfigService {

  static config: any = null;
  static isConfigLoading = false;

  constructor(private http: HttpClient) {}

  public get(configName:string, environment:any): Observable<any> {
    if(!environment.production) {
      // If we are in dev mode, we use the config from the environment
      MmxStaticConfigService.config = environment.config;
    }
    if(MmxStaticConfigService.isConfigLoading && MmxStaticConfigService.config == null) {
      return new Observable((observer) => {
        const interval = setInterval(() => {
          if(MmxStaticConfigService.config) {
            observer.next(MmxStaticConfigService.config);
            observer.complete();
            clearInterval(interval);
          }
        }, 100);
      });
    }

    if(MmxStaticConfigService.config != null) {
      return new Observable((observer) => {
        observer.next(MmxStaticConfigService.config);
        observer.complete();
      });
    }

    MmxStaticConfigService.isConfigLoading = true;
    return this.http.get<any>(`${environment.imagesURL}/website_assets/schuco/config/${configName}.json`);
  }
}
