import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { SongEntity } from '../reducers/songs.reducer';
import { map } from 'rxjs/operators';
@Injectable()
export class PlaylistDataService {

  readonly baseUrl = environment.playlistUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<SongEntity[]> {
    return this.http.get<PlaylistsResponse>(this.baseUrl)
      .pipe(
        map(response => response.data)
      );
  }
}

interface PlaylistsResponse {
  data: SongEntity[];
}