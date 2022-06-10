import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters/characters.service';
import { Character } from 'src/app/character.model';
import { PruebaService } from 'src/app/core/services/prueba/prueba.service';

@Component({
  selector: 'app-search-characters',
  templateUrl: './search-characters.component.html',
  styleUrls: ['./search-characters.component.scss'],
})
export class SearchCharactersComponent implements OnInit {
  nameCharacter = '';
  characters?: Array<Character>;
  constructor(
    private charactersService: CharactersService,
    private prueba: PruebaService
  ) {}

  ngOnInit(): void {}
  allcharacters() {
    this.charactersService.get().subscribe((resp) => {
      this.characters = resp;
    });
  }

  search() {
    this.charactersService.get().subscribe((resp) => {
      this.characters = resp.filter((c) =>
        c.name
          .toUpperCase()
          .trim()
          .includes(this.nameCharacter.toUpperCase().trim())
      );
    });
  }

  traer() {
    this.prueba.login().subscribe((data) => {
      console.log(
        'atoridad' + data.authorities,
        'userName=  ' + data.userName,
        'token= ' + data.token,
        'bearerd= ' + data.bearer
      );
    });
  }
}
