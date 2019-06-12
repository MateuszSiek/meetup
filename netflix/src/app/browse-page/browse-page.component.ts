import {Component, OnInit} from '@angular/core';
import {TvShow} from '../models/tv-show';
import {TvShowService} from '../services/tv-show.service';

@Component({
    selector: 'app-browse-page',
    templateUrl: './browse-page.component.html',
    styleUrls: ['./browse-page.component.scss']
})
export class BrowsePageComponent implements OnInit {
    public tvShows: TvShow[] = [];

    constructor(private tvShowService: TvShowService) {
    }

    ngOnInit() {
        this.tvShowService.loadTvShows().subscribe((a: TvShow[]) => {
            this.tvShows = a;
        });
    }
}
