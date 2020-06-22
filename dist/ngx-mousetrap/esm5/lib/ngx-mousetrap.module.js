import { NgModule } from '@angular/core';
import { NgxMousetrapDirective } from './ngx-mousetrap.directive';
import { NgxMousetrapService } from './ngx-mousetrap.service';
import * as i0 from "@angular/core";
var NgxMousetrapModule = /** @class */ (function () {
    function NgxMousetrapModule() {
    }
    NgxMousetrapModule.forRoot = function () {
        return {
            ngModule: NgxMousetrapModule,
            providers: [
                NgxMousetrapService
            ]
        };
    };
    NgxMousetrapModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxMousetrapModule });
    NgxMousetrapModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxMousetrapModule_Factory(t) { return new (t || NgxMousetrapModule)(); }, providers: [NgxMousetrapService], imports: [[]] });
    return NgxMousetrapModule;
}());
export { NgxMousetrapModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1vdXNldHJhcC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbW91c2V0cmFwLyIsInNvdXJjZXMiOlsibGliL25neC1tb3VzZXRyYXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUk5RDtJQUFBO0tBZUM7SUFSUSwwQkFBTyxHQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFO2dCQUNULG1CQUFtQjthQUNwQjtTQUNGLENBQUM7SUFDSixDQUFDOzBEQVJVLGtCQUFrQjt1SEFBbEIsa0JBQWtCLG1CQUZsQixDQUFDLG1CQUFtQixDQUFDLFlBRnZCLEVBQUU7NkJBUmI7Q0FxQkMsQUFmRCxJQWVDO1NBVFksa0JBQWtCO3dGQUFsQixrQkFBa0IsbUJBTGQscUJBQXFCLGFBRTFCLHFCQUFxQjtrREFHcEIsa0JBQWtCO2NBTjlCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDckMsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ2hDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neE1vdXNldHJhcERpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LW1vdXNldHJhcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmd4TW91c2V0cmFwU2VydmljZSB9IGZyb20gJy4vbmd4LW1vdXNldHJhcC5zZXJ2aWNlJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05neE1vdXNldHJhcERpcmVjdGl2ZV0sXG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbTmd4TW91c2V0cmFwRGlyZWN0aXZlXSxcbiAgcHJvdmlkZXJzOiBbTmd4TW91c2V0cmFwU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4TW91c2V0cmFwTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hNb3VzZXRyYXBNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTmd4TW91c2V0cmFwU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==