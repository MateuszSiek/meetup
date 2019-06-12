import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {UserListPageModule} from './user-list/user-list-page/user-list-page.module';
import {EditProfilePageModule} from './user-list/edit-profile-page/edit-profile-page.module';
import {NotFoundPageModule} from './not-found-page/not-found-page.module';
import { UserNotFoundPageComponent } from './user-list/user-not-found-page/user-not-found-page.component';
import { BrowsePageComponent } from './browse-page/browse-page.component';
import { CarouselComponent } from './browse-page/carousel/carousel.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,

        UserListPageModule,
        EditProfilePageModule,
        NotFoundPageModule
    ],
    declarations: [AppComponent, UserNotFoundPageComponent, BrowsePageComponent, CarouselComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
