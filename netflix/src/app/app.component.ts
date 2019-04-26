import {Component, OnInit} from '@angular/core';
import {User} from './models/user';
import {UsersService} from './services/users.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor() {
    }

    public ngOnInit(): void {
    }
}
