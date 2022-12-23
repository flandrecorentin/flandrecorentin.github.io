import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-onecontact',
  templateUrl: './onecontact.component.html',
  styleUrls: ['./onecontact.component.scss']
})
export class OnecontactComponent {
  @Input() title: string|undefined;
  @Input() description: string|undefined;
  @Input() link: string|undefined;
  @Input() logo: string|undefined;
}
