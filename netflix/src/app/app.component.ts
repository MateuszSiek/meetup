import {Component, OnInit} from '@angular/core';
import {User} from './models/user';
import {UsersService} from './services/users.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public title: string = 'Who\'s watching?';
    public users: User[] = [];
    public isEditMode: boolean = false;

    constructor(private userService: UsersService) {
    }

    public ngOnInit(): void {
        this.users = this.userService.getUsers();
    }
}
