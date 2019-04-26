import {Component, Input, OnInit} from '@angular/core';
import {User} from '../models/user';
import {UsersService} from '../services/users.service';

@Component({
    selector: 'app-edit-profile-page',
    templateUrl: './edit-profile-page.component.html',
    styleUrls: ['./edit-profile-page.component.scss']
})
export class EditProfilePageComponent implements OnInit {
    @Input() public user?: User;
    public selection: string;

    constructor(private userService: UsersService) {
    }

    ngOnInit() {
        this.user = this.userService.getUser(2);
    }
}
