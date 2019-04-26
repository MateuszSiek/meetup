import {Component, Input, OnInit} from '@angular/core';
import {User} from '../models/user';
import {UsersService} from '../services/users.service';

@Component({
    selector: 'app-user-list-page',
    templateUrl: './user-list-page.component.html',
    styleUrls: ['./user-list-page.component.scss']
})
export class UserListPageComponent implements OnInit {
    public title: string = 'Who\'s watching?';
    public users: User[] = [];
    public isEditMode: boolean = false;

    constructor(private userService: UsersService) {
    }

    public ngOnInit(): void {
        this.users = this.userService.getUsers();
    }
}
