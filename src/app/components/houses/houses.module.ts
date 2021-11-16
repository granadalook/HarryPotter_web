import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousesRoutingModule } from './houses-routing.module';
import { HouseComponent } from './components/house/house.component';
import { GryffindorComponent } from './components/gryffindor/gryffindor.component';
import { HufflepuffComponent } from './components/hufflepuff/hufflepuff.component';
import { RavenclawComponent } from './components/ravenclaw/ravenclaw.component';
import { SlytherinComponent } from './components/slytherin/slytherin.component';

@NgModule({
  declarations: [
    HouseComponent,
    GryffindorComponent,
    HufflepuffComponent,
    RavenclawComponent,
    SlytherinComponent,
  ],
  imports: [CommonModule, HousesRoutingModule],
})
export class HousesModule {}
