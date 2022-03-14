import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Character } from 'src/app/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Array<Character>>(
      `${environment.url_api}${environment.allcharacters}`
    );
  }
}
