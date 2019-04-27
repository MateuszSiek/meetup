import {Injectable} from '@angular/core';
import {Language} from '../models/language';

@Injectable({
    providedIn: 'root'
})
export class LanguagesService {
    public languages: Language[] = [
        {value: 'PL', displayValue: 'Polish'},
        {value: 'EN', displayValue: 'English'},
        {value: 'ES', displayValue: 'Spanish'},
        {value: 'DE', displayValue: 'German'},
    ];

    constructor() {
    }

    public getLanguages(): Language[] {
        return this.languages;
    }
}
