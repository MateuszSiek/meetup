import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListPageComponent} from './user-list-page.component';
import {HighlightDirective} from '../directives/highlight.directive';
import {UserTileComponent} from './user-tile/user-tile.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [UserListPageComponent, HighlightDirective, UserTileComponent],
    exports: [UserListPageComponent]
})
export class UserListPageModule {
}
