import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit, OnChanges {

  @Input()
  selectedRating = 0;
  @Input()
  rateable = false;
  @Output()
  em: EventEmitter<number> = new EventEmitter<number>();
  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star'
    }

  ];

  constructor() {}
  ngOnChanges(): void {
    if (!this.rateable){
      this.stars.filter( (star) => {
        if ( star.id <= this.selectedRating){
          star.class = 'star-gold star';
        }else{
          star.class = 'star-gray star';
        }
        return star;
      });
    }
  }

  ngOnInit(): void {}


  selectStar(value: number): void{
    // prevent multiple selection
    if (this.rateable) {
      this.stars.filter( (star) => {
        if ( star.id <= value){
          star.class = 'star-gold star';
        }else{
          star.class = 'star-gray star';
        }
        return star;
      });
      this.selectedRating = value;
      this.em.emit(this.selectedRating);
    }
  }

}
