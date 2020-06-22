import { NgModule } from '@angular/core';
import { NgxMousetrapDirective } from './ngx-mousetrap.directive';
import { NgxMousetrapService } from './ngx-mousetrap.service';
import * as i0 from "@angular/core";
export class NgxMousetrapModule {
    static forRoot() {
        return {
            ngModule: NgxMousetrapModule,
            providers: [
                NgxMousetrapService
            ]
        };
    }
}
NgxMousetrapModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxMousetrapModule });
NgxMousetrapModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxMousetrapModule_Factory(t) { return new (t || NgxMousetrapModule)(); }, providers: [NgxMousetrapService], imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxMousetrapModule, { declarations: [NgxMousetrapDirective], exports: [NgxMousetrapDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxMousetrapModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxMousetrapDirective],
                imports: [],
                exports: [NgxMousetrapDirective],
                providers: [NgxMousetrapService]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1vdXNldHJhcC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbW91c2V0cmFwLyIsInNvdXJjZXMiOlsibGliL25neC1tb3VzZXRyYXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQVU5RCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFO2dCQUNULG1CQUFtQjthQUNwQjtTQUNGLENBQUM7SUFDSixDQUFDOztzREFSVSxrQkFBa0I7bUhBQWxCLGtCQUFrQixtQkFGbEIsQ0FBQyxtQkFBbUIsQ0FBQyxZQUZ2QixFQUFFO3dGQUlBLGtCQUFrQixtQkFMZCxxQkFBcUIsYUFFMUIscUJBQXFCO2tEQUdwQixrQkFBa0I7Y0FOOUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNyQyxPQUFPLEVBQUUsRUFBRTtnQkFDWCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDaEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4TW91c2V0cmFwRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtbW91c2V0cmFwLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3hNb3VzZXRyYXBTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtbW91c2V0cmFwLnNlcnZpY2UnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTmd4TW91c2V0cmFwRGlyZWN0aXZlXSxcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtOZ3hNb3VzZXRyYXBEaXJlY3RpdmVdLFxuICBwcm92aWRlcnM6IFtOZ3hNb3VzZXRyYXBTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNb3VzZXRyYXBNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neE1vdXNldHJhcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBOZ3hNb3VzZXRyYXBTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19