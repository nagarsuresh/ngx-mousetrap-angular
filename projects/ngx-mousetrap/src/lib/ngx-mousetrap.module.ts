import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxMousetrapDirective } from './ngx-mousetrap.directive';
import { NgxMousetrapService } from './ngx-mousetrap.service';



@NgModule({
  declarations: [NgxMousetrapDirective],
  imports: [],
  exports: [NgxMousetrapDirective],
  providers: [NgxMousetrapService]
})
export class NgxMousetrapModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxMousetrapModule,
      providers: [
        NgxMousetrapService
      ]
    };
  }
}
