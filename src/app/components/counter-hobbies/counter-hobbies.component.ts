import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter-hobbies',
  templateUrl: './counter-hobbies.component.html',
  styleUrls: ['./counter-hobbies.component.scss']
})
export class CounterHobbiesComponent {
  @Input() lengthCounter: number = 0;
  @Output() slideEvent = new EventEmitter<number>();
  numSlide = 1;

  changeSlides(value: number) {
    this.slideEvent.emit(value);
  }

  changeNumSlidesPrev() {
    if(this.numSlide!=1){
      this.numSlide--;
      this.changeSlides(this.numSlide);
    }
    else if(this.numSlide==1){
      this.numSlide = this.lengthCounter;
      this.changeSlides(this.numSlide);
    }
  }
  changeNumSlidesNext() {
    if(this.numSlide!=this.lengthCounter){
      this.numSlide++;
      this.changeSlides(this.numSlide);
    }
    else if(this.numSlide==this.lengthCounter){
      this.numSlide = 1;
      this.changeSlides(this.numSlide);
    }
  }
}
