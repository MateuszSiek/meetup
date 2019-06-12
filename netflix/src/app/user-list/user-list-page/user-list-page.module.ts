import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListPageComponent} from './user-list-page.component';
import {HighlightDirective} from '../../directives/highlight.directive';
import {UserTileComponent} from './user-tile/user-tile.component';
import {RouterModule} from '@angular/router';

const Components = [UserListPageComponent, UserTileComponent];

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [...Components, HighlightDirective],
    exports: [...Components]
})
export class UserListPageModule {
}
