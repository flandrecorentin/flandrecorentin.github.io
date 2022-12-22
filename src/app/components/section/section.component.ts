import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent {
  @Input() description: string | undefined;
  @Input() title: string | undefined;
  @Input() linkSVG: string = "";
  // same thing for the svg
}
