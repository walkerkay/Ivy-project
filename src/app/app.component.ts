import { Component, ɵrenderComponent, Injector } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private injector: Injector) {}
    title = 'ivy-project';

    loadComponent() {
        // 我们不仅可以懒加载Module，我们也可以懒加载Component
        import('./counter/counter.component').then(({ CounterComponent }) => {
            ɵrenderComponent(CounterComponent, {
                injector: this.injector,
                host: '.counter-container'
            });
        });
    }
}
