import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MmxAngularService } from './mmx-angular.service';
import { MmxStaticConfigService } from './services/mmx-static-config.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    MmxAngularService,
    MmxStaticConfigService,
  ]
})
export class MmxAngularModule { 
  public static forRoot(environment: any): ModuleWithProviders<MmxAngularModule> {
    return {
      ngModule: MmxAngularModule,
      providers: [
        {
          provide: 'environment',
          useValue: environment,
        }
      ]
    }
  }
}
