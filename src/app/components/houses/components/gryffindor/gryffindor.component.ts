import { Component, OnInit } from '@angular/core';
import { AllHousesService } from 'src/app/core/services/allhouses/all-houses.service';
import { Character } from 'src/app/character.model';

@Component({
  selector: 'app-gryffindor',
  templateUrl: './gryffindor.component.html',
  styleUrls: ['./gryffindor.component.scss'],
})
export class GryffindorComponent implements OnInit {
  house: string = 'gryffindor';
  characters?: Array<Character>;

  constructor(private allhouseService: AllHousesService) {}

  ngOnInit(): void {}
  houseStudens() {
    this.allhouseService.get(this.house).subscribe((m) => {
      this.characters = m;
    });
  }
}
