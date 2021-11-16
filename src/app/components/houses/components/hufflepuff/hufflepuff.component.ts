import { Component, OnInit } from '@angular/core';
import { AllHousesService } from 'src/app/core/services/allhouses/all-houses.service';
import { Character } from 'src/app/character.model';

@Component({
  selector: 'app-hufflepuff',
  templateUrl: './hufflepuff.component.html',
  styleUrls: ['./hufflepuff.component.scss'],
})
export class HufflepuffComponent implements OnInit {
  house: string = 'hufflepuff';
  characters?:Array<Character>;

  constructor(private allhouseService: AllHousesService) {}

  ngOnInit(): void {}
  houseStudens() {
    this.allhouseService.get(this.house).subscribe((m) => {
      this.characters = m;
    });
  }
}
