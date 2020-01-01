import { Component, OnInit, Input, Output, EventEmitter, ɵdetectChanges } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
    @Input() counter = 0;

    @Output() counterReset: EventEmitter<void> = new EventEmitter<void>();

    constructor() {}

    ngOnInit() {}

    plus() {
        this.counter++;
    }

    reset() {
        this.counter = 0;
        this.counterReset.emit();
    }
}
