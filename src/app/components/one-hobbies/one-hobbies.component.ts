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
}
