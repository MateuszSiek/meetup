import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../models/user';
import {UsersService} from '../services/users.service';
import {Language} from '../models/language';
import {LanguagesService} from '../services/languages.service';


@Component({
    selector: 'app-edit-profile-page',
    templateUrl: './edit-profile-page.component.html',
    styleUrls: ['./edit-profile-page.component.scss']
})
export class EditProfilePageComponent implements OnInit {
    public user?: User;
    public languages: Language[] = [];

    constructor(private userService: UsersService, private langService: LanguagesService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        const id = Number(this.route.snapshot.queryParams['id']);
        this.user = this.userService.getUser(id);
    }
}
