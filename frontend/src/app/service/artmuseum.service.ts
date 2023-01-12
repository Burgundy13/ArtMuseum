import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Artwork } from '../model/artwork';
import { Exibition } from '../model/exibition';

const exibitionsUrl = 'http://localhost:3000/api/exibitions';
const artworkUrl = 'http://localhost:3000/api/artworks';

@Injectable({
  providedIn: 'root',
})
export class ArtmuseumService {
  constructor(private http: HttpClient) {}

  getAllExibitions(): Observable<Exibition[]> {
    return this.http.get(exibitionsUrl).pipe(
      map((data: any) => {
        return data && data.map((elem: any) => new Exibition(elem));
      })
    );
  }

  getOneExibition(id: number): Observable<Exibition> {
    return this.http.get(`${exibitionsUrl}/${id}`).pipe(
      map((data: any) => {
        return new Exibition(data);
      })
    );
  }

  getExibitionAtrworks(id: number): Observable<Artwork[]> {
    return this.http.get(`${exibitionsUrl}/${id}/artworks`).pipe(
      map((data: any) => {
        return data && data.map((elem: any) => new Artwork(elem));
      })
    );
  }

  getAllArtworks(params?: any): Observable<Artwork[]> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams()
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || '')
          .set(
            'filter',
            (params.filter && JSON.stringify(params.filter)) || ''
          ),
      };
    }
    return this.http.get(artworkUrl, options).pipe(
      map((data: any) => {
        return data && data.map((elem: any) => new Artwork(elem));
      })
    );
  }

  addArtwork(exibitId: number, artworkId: number): Observable<Artwork> {
    return this.http
      .put(`${exibitionsUrl}/${exibitId}/artworks/${artworkId}`, {})
      .pipe(
        map((data: any) => {
          return new Artwork(data);
        })
      );
  }

  removeArtwork(exibitId: number, artworkId: number): Observable<Artwork> {
    return this.http
      .delete(`${exibitionsUrl}/${exibitId}/artworks/${artworkId}`)
      .pipe(
        map((data: any) => {
          return new Artwork(data);
        })
      );
  }
}
