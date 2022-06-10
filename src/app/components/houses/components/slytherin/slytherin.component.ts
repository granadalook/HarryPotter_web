import { Component, OnInit } from '@angular/core';
import { AllHousesService } from 'src/app/core/services/allhouses/all-houses.service';
import { Character } from 'src/app/character.model';

@Component({
  selector: 'app-slytherin',
  templateUrl: './slytherin.component.html',
  styleUrls: ['./slytherin.component.scss']
})
export class SlytherinComponent implements OnInit {
  house: string = 'slytherin';
  characters?:Array<Character>;

  constructor(private allhouseService: AllHousesService) { }

  ngOnInit(): void {
  }
  houseStudens() {
    this.allhouseService.get(this.house).subscribe((m) => {
      this.characters = m;
    });
  }
}
