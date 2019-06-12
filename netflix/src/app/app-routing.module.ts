import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserListPageComponent} from './user-list/user-list-page/user-list-page.component';
import {EditProfilePageComponent} from './user-list/edit-profile-page/edit-profile-page.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {UserNotFoundPageComponent} from './user-list/user-not-found-page/user-not-found-page.component';
import {UserExistGuard} from './guards/user-exist.guard';
import {Pages} from './models/reouter';
import {BrowsePageComponent} from './browse-page/browse-page.component';

const routes: Routes = [
    {path: Pages.Browse, component: BrowsePageComponent},
    {path: Pages.List, component: UserListPageComponent},
    {
        path: Pages.Edit,
        component: EditProfilePageComponent,
        canActivate: [UserExistGuard]
    },
    {path: Pages.UserNotFound, component: UserNotFoundPageComponent},
    {path: '', redirectTo: '/' + Pages.List, pathMatch: 'full'},
    {path: '**', component: NotFoundPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
