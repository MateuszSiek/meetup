import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import {UsersService} from '../services/users.service';
import {Pages} from '../models/reouter';

@Injectable({
    providedIn: 'root'
})
export class UserExistGuard implements CanActivate {
    constructor(private userService: UsersService, private router: Router) {
    }

    public canActivate(next: ActivatedRouteSnapshot): boolean {
        const userExist = this.userExist(next);
        if (!userExist) {
            this.router.navigate([Pages.UserNotFound]);
        }
        return this.userExist(next);
    }

    private userExist(next: ActivatedRouteSnapshot): boolean {
        const id: undefined | number = next.queryParams.id && Number(next.queryParams.id);
        if (id === undefined) {
            return false;
        }
        return !!this.userService.getUser(id);
    }
}
