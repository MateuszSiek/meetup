import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TvShow, TvShowResponse} from '../models/tv-show';
import {filter, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TvShowService {
    constructor(private http: HttpClient) {
    }

    public loadTvShows(): Observable<TvShow[]> {
        return this.http.get<TvShowResponse[]>('http://api.tvmaze.com/shows').pipe(
            map((r: TvShowResponse[]) => this.mapResponse(r))
        );
    }

    private mapResponse(r: TvShowResponse[]): TvShow[] {
        return r.map((tvShow: TvShowResponse) => {
            return {
                image: tvShow.image.medium,
                title: tvShow.name
            };
        });
    }
}
