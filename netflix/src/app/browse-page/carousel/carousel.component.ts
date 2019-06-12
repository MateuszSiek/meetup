import {Component, Input, OnInit} from '@angular/core';
import {TvShow} from '../../models/tv-show';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
    @Input() tvShows?: TvShow[];
}
