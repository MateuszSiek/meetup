import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserListPageComponent} from './user-list-page/user-list-page.component';
import {EditProfilePageComponent} from './edit-profile-page/edit-profile-page.component';

const routes: Routes = [
    {path: 'list', component: UserListPageComponent},
    {path: 'edit', component: EditProfilePageComponent},
    {path: '', redirectTo: '/list', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
