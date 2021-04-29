import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StarRatingComponent} from './star-rating.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [
    MatIconModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class StarRatingModule { }
