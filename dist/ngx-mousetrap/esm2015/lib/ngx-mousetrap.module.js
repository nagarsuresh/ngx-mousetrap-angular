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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1vdXNldHJhcC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbW91c2V0cmFwL3NyYy9saWIvbmd4LW1vdXNldHJhcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFVOUQsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRTtnQkFDVCxtQkFBbUI7YUFDcEI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBZEYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNyQyxPQUFPLEVBQUUsRUFBRTtnQkFDWCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDaEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4TW91c2V0cmFwRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtbW91c2V0cmFwLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3hNb3VzZXRyYXBTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtbW91c2V0cmFwLnNlcnZpY2UnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTmd4TW91c2V0cmFwRGlyZWN0aXZlXSxcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtOZ3hNb3VzZXRyYXBEaXJlY3RpdmVdLFxuICBwcm92aWRlcnM6IFtOZ3hNb3VzZXRyYXBTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNb3VzZXRyYXBNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5neE1vdXNldHJhcE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4TW91c2V0cmFwTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE5neE1vdXNldHJhcFNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=