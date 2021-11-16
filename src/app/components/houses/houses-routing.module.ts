import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GryffindorComponent } from './components/gryffindor/gryffindor.component';
import { HouseComponent } from './components/house/house.component';
import { HufflepuffComponent } from './components/hufflepuff/hufflepuff.component';
import { RavenclawComponent } from './components/ravenclaw/ravenclaw.component';
import { SlytherinComponent } from './components/slytherin/slytherin.component';

const routes: Routes = [
  {
    path:"",
    component:HouseComponent
  },
  {
    path:"gryffindor",
    component:GryffindorComponent
  },
  {
    path:"slytherin",
    component:SlytherinComponent
  },
  {
    path:"hufflepuff",
    component:HufflepuffComponent
  },
  {
    path:"ravenclaw",
    component:RavenclawComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousesRoutingModule { }
