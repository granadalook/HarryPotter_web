import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters/characters.service';
import { Character } from 'src/app/character.model';

@Component({
  selector: 'app-search-characters',
  templateUrl: './search-characters.component.html',
  styleUrls: ['./search-characters.component.scss'],
})
export class SearchCharactersComponent implements OnInit {
  nameCharacter = '';
  characters?: Array<Character>;
  constructor(private charactersService: CharactersService) {}

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
}
