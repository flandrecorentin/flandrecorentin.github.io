import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  textButtonContact = 'Me Contacter';
  linkButtonContact = './contact';
  textButtonAbout = 'A Propos';
  linkButtonAbout = './about';
  styleClassFooter = "styleFooter";
}
