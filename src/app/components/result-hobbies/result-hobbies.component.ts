import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-result-hobbies',
  templateUrl: './result-hobbies.component.html',
  styleUrls: ['./result-hobbies.component.css']
})
export class ResultHobbiesComponent {
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() link: string | undefined;
  @Input() altImg: string | undefined;
  @Input() alignment: string ="horizontal";
}
