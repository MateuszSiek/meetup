import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {UserListPageModule} from './user-list-page/user-list-page.module';
import {EditProfilePageModule} from './edit-profile-page/edit-profile-page.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserListPageModule,
        EditProfilePageModule
    ],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
