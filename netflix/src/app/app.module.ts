import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserListPageComponent} from './user-list-page/user-list-page.component';
import {FormsModule} from '@angular/forms';
import {HighlightDirective} from './directives/highlight.directive';
import {EditProfilePageComponent} from './edit-profile-page/edit-profile-page.component';
import {UserTileComponent} from './user-list-page/user-tile/user-tile.component';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    declarations: [AppComponent, UserListPageComponent, HighlightDirective, EditProfilePageComponent, UserTileComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
