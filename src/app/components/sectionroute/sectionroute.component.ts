import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sectionroute',
  templateUrl: './sectionroute.component.html',
  styleUrls: ['./sectionroute.component.css']
})
export class SectionrouteComponent {
  @Input() text: string = "";
  @Input() styleClass: string = "route-label";
  @Input() styleClassDiv: string = "";
}
