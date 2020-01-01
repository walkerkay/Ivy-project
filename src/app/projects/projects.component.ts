import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

export function UnSubscriber() {
    return cmpType => {
        const originalFactory = cmpType.ɵfac;
        cmpType.ɵcmp.factory = (...args) => {
            const cmp = originalFactory(...args);
            cmpType.ɵcmp.onDestroy = () => {
                if (cmp.ngOnDestroy) {
                    cmp.ngOnDestroy();
                }
                Object.keys(cmp).forEach(prop => {
                    if (isSubscription(cmp[prop])) {
                        cmp[prop].unsubscribe();
                    }
                });
                console.log('unsubscribe');
            };

            return cmp;
        };
        return cmpType;
    };
}

export function isSubscription(val: any): val is Subscription {
    return !!val && (val instanceof Subscription || typeof val.unsubscribe === 'function');
}

@UnSubscriber()
@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
    subscription: Subscription;

    constructor() {}

    ngOnInit() {
        this.subscription = interval(1000).subscribe(() => {
            console.log('timer');
        });
    }

    ngOnDestroy() {
        console.log('destroy');
    }
}
