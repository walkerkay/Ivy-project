import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkItemColorPipe } from './pipes/color.pipe';
import { CounterComponent } from './counter/counter.component';

@NgModule({
    declarations: [AppComponent, WorkItemColorPipe, CounterComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
