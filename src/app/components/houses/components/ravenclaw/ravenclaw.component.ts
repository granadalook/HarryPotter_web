import { Component, OnInit } from '@angular/core';
import { AllHousesService } from 'src/app/core/services/allhouses/all-houses.service';
import { Character } from 'src/app/character.model';
@Component({
  selector: 'app-ravenclaw',
  templateUrl: './ravenclaw.component.html',
  styleUrls: ['./ravenclaw.component.scss']
})
export class RavenclawComponent implements OnInit {
  house: string = 'ravenclaw';
  characters?:Array<Character>;
  constructor( private allhouseService: AllHousesService,) { }

  ngOnInit(): void {
  }
  houseStudens() {
    this.allhouseService.get(this.house).subscribe((m) => {
      this.characters = m;
    });
  }
}


