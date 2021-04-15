import { NgModule } from '@angular/core';
import { NgxMousetrapDirective } from './ngx-mousetrap.directive';
import { NgxMousetrapService } from './ngx-mousetrap.service';
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
NgxMousetrapModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxMousetrapDirective],
                imports: [],
                exports: [NgxMousetrapDirective],
                providers: [NgxMousetrapService]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1vdXNldHJhcC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25hZ2Fycy9QZXJzb25hbC9naXRodWIvbmd4LW1vdXNldHJhcC1hbmd1bGFyL3Byb2plY3RzL25neC1tb3VzZXRyYXAvc3JjLyIsInNvdXJjZXMiOlsibGliL25neC1tb3VzZXRyYXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBVTlELE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1QsbUJBQW1CO2FBQ3BCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWRGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDckMsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ2hDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neE1vdXNldHJhcERpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LW1vdXNldHJhcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmd4TW91c2V0cmFwU2VydmljZSB9IGZyb20gJy4vbmd4LW1vdXNldHJhcC5zZXJ2aWNlJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05neE1vdXNldHJhcERpcmVjdGl2ZV0sXG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbTmd4TW91c2V0cmFwRGlyZWN0aXZlXSxcbiAgcHJvdmlkZXJzOiBbTmd4TW91c2V0cmFwU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4TW91c2V0cmFwTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ3hNb3VzZXRyYXBNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neE1vdXNldHJhcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBOZ3hNb3VzZXRyYXBTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19