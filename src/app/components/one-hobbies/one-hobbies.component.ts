import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-one-hobbies',
  templateUrl: './one-hobbies.component.html',
  styleUrls: ['./one-hobbies.component.scss']
})
export class OneHobbiesComponent {
  @Input() numberNum:number = 0;
  @Input() imageLink:string[] =[];
  @Input() isALink:boolean = false;
  @Input() logo:string | undefined;
  @Input() link:string = "";
  @Input() title:string | undefined;
  @Input() description:string | undefined;
  remainderDivision:number =(this.numberNum%2);
  numberImage = 0;

  previousImage(number: number) {
    if(this.numberImage !=0){
      this.numberImage--;
    }
    else{
      this.numberImage = this.imageLink.length - 1;
    }
  }

  nextImage(number: number) {
    if(this.numberImage !=this.imageLink.length -1){
      this.numberImage++;
    }
    else{
      this.numberImage = 0;
    }
  }
}
