import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-response-curriculum',
  templateUrl: './response-curriculum.component.html',
  styleUrls: ['./response-curriculum.component.scss']
})
export class ResponseCurriculumComponent {
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() linkSVG: string | undefined;
  default(){
    console.log('test');
  }
}
