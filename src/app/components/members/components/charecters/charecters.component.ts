import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters/characters.service';
import { Character } from 'src/app/character.model';

@Component({
  selector: 'app-charecters',
  templateUrl: './charecters.component.html',
  styleUrls: ['./charecters.component.scss'],
})
export class CharectersComponent implements OnInit {
  characters?: Array<Character>;
  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {}
  allcharacters() {
    this.charactersService.get().subscribe((resp) => {
      this.characters = resp;
    });
  }
}
