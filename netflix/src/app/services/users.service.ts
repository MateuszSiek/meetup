import {Injectable} from '@angular/core';
import {User} from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor() {
        console.log(this);
    }

    private users: User[] = [
        new User({id: 0, name: 'Mateusz'}),
        new User({id: 1, name: 'Agnieszka', avatar: 'assets/avatar_2.png'}),
        new User({id: 2, name: 'Kamil'})
    ];

    public getUsers(): User[] {
        return this.users;
    }

    public getUser(id: number): User | undefined {
        return this.users.find((u: User) => u.id === id);
    }
}
