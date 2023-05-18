import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PeopleTableComponent } from '@shared/components';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

const standAloneComponents = [PeopleTableComponent];
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ...standAloneComponents],
})
export class HomeModule {}
