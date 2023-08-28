import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-one-ITproject',
  templateUrl: './one-ITproject.component.html',
  styleUrls: ['./one-ITproject.component.scss']
})
export class OneITprojectComponent {
  @Input() numberNum:number = 0;
  @Input() imageLink:string[] =[];
  @Input() activeAllLinks:boolean = false;
  @Input() links: [boolean, string, string][]|undefined;
  @Input() title:string | undefined;
  @Input() description: string[][] | undefined;
  @Input() styleDisplay: string | undefined = "large-project";
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
