import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkItemColorPipe } from './pipes/color.pipe';
import { CounterComponent } from './counter/counter.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
    declarations: [AppComponent, WorkItemColorPipe, CounterComponent, ProjectsComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
