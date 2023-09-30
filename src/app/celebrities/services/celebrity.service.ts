import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Celebrity } from '../interfaces/celebrity.interfaces';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class CelebrityService {

  private baseUrl:string= environments.baseUrl;

  constructor(private http: HttpClient) { }

  getCelebrity():Observable <Celebrity[]>{

      return this.http.get<Celebrity[]>(`${this.baseUrl}/celebrities`)
  }

  getCelebrityById(id: string): Observable<Celebrity | undefined>{

    return this.http.get<Celebrity>(`${this.baseUrl}/celebrities/${id}`)
    .pipe(
      catchError(error => of (undefined))
      )
  }
  getSuggestions(query: string): Observable<Celebrity[]>{

    return this.http.get<Celebrity[]>(`${this.baseUrl}/celebrities?q=${ query }&_limit=6`);
   }

  //endpoints agregar,actualizar, eliminar

  addCelebrity(celebrity: Celebrity):Observable<Celebrity>{
    return this.http.post<Celebrity>(`${this.baseUrl}/celebrities`, celebrity);
  }
  updateCelebrity(celebrity: Celebrity):Observable<Celebrity>{
    if(!celebrity.id) throw Error('Celebrity is required');
    return this.http.patch<Celebrity>(`${this.baseUrl}/celebrities/${celebrity.id}`, celebrity);
  }
  deleteCelebrityCelebrity(id:string):Observable<boolean>{
    return this.http.delete(`${this.baseUrl}/celebrities/${id}`)
    .pipe(
      map(resp=> true),
      catchError(err=> of(false)),
    );
   }

}
