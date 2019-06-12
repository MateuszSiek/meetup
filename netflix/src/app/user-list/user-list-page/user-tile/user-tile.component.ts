import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {Pages} from '../../../models/reouter';

@Component({
    selector: 'app-user-tile',
    templateUrl: './user-tile.component.html',
    styleUrls: ['./user-tile.component.scss']
})
export class UserTileComponent implements OnInit {
    @Input() public user: User;
    @Input() public isEditMode: boolean = false;

    public pages: typeof Pages = Pages;

    constructor() {
    }

    ngOnInit() {
        console.log(this);
    }
}
