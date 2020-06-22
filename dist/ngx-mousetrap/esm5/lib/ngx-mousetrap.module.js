import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { NgxMousetrapDirective } from './ngx-mousetrap.directive';
import { NgxMousetrapService } from './ngx-mousetrap.service';
var NgxMousetrapModule = /** @class */ (function () {
    function NgxMousetrapModule() {
    }
    NgxMousetrapModule_1 = NgxMousetrapModule;
    NgxMousetrapModule.forRoot = function () {
        return {
            ngModule: NgxMousetrapModule_1,
            providers: [
                NgxMousetrapService
            ]
        };
    };
    var NgxMousetrapModule_1;
    NgxMousetrapModule = NgxMousetrapModule_1 = __decorate([
        NgModule({
            declarations: [NgxMousetrapDirective],
            imports: [],
            exports: [NgxMousetrapDirective],
            providers: [NgxMousetrapService]
        })
    ], NgxMousetrapModule);
    return NgxMousetrapModule;
}());
export { NgxMousetrapModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1vdXNldHJhcC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbW91c2V0cmFwLyIsInNvdXJjZXMiOlsibGliL25neC1tb3VzZXRyYXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQVU5RDtJQUFBO0lBU0EsQ0FBQzsyQkFUWSxrQkFBa0I7SUFDdEIsMEJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQWtCO1lBQzVCLFNBQVMsRUFBRTtnQkFDVCxtQkFBbUI7YUFDcEI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7SUFSVSxrQkFBa0I7UUFOOUIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDckMsT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNoQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNqQyxDQUFDO09BQ1csa0JBQWtCLENBUzlCO0lBQUQseUJBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4TW91c2V0cmFwRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtbW91c2V0cmFwLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3hNb3VzZXRyYXBTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtbW91c2V0cmFwLnNlcnZpY2UnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTmd4TW91c2V0cmFwRGlyZWN0aXZlXSxcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtOZ3hNb3VzZXRyYXBEaXJlY3RpdmVdLFxuICBwcm92aWRlcnM6IFtOZ3hNb3VzZXRyYXBTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNb3VzZXRyYXBNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neE1vdXNldHJhcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBOZ3hNb3VzZXRyYXBTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19