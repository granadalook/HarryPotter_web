import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './components/members/members.component';
import { CharectersComponent } from './components/charecters/charecters.component';
import { SearchCharactersComponent } from './components/search-characters/search-characters.component';


@NgModule({
  declarations: [
    MembersComponent,
    CharectersComponent,
    SearchCharactersComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,ReactiveFormsModule, FormsModule,
  ]
})
export class MembersModule { }
