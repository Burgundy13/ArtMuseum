import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Exibition } from '../model/exibition';

const exibitionsUrl = 'http://localhost:3000/api/exibitions';

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
}
