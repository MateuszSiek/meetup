import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {FormsModule} from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    declarations: [AppComponent, UserComponent, HighlightDirective],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
