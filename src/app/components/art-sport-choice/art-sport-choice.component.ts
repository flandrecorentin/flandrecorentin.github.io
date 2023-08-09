import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-art-sport-choice',
  templateUrl: './art-sport-choice.component.html',
  styleUrls: ['./art-sport-choice.component.css']
})
export class ArtSportChoiceComponent implements OnInit{
  @Input() section:string | undefined;
  textButton = ['Sport', 'Art'];
  styleHobbies = 'styleHobbies';
  styleHobbies1 = this.styleHobbies;
  styleHobbies2 = this.styleHobbies;
  styleHobbiesActive = 'styleHobbiesActive';

  onClick1() {
    this.styleHobbies1 =  this.styleHobbiesActive;
    this.styleHobbies2 = this.styleHobbies;
  }
  onClick2() {
    this.styleHobbies1 =  this.styleHobbies;
    this.styleHobbies2 = this.styleHobbiesActive;
  }
  ngOnInit(){
    switch (this.section) {
      case 'art':
        this.styleHobbies1 = this.styleHobbies;
        this.styleHobbies2 = this.styleHobbiesActive;
        break;
      case 'sport':
        this.styleHobbies1 = this.styleHobbiesActive;
        this.styleHobbies2 = this.styleHobbies;
        break;
      default:
        this.styleHobbies1 = this.styleHobbies;
        this.styleHobbies2 = this.styleHobbies;
        break;
    }
  }
}
