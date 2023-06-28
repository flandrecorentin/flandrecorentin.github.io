import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  textDescription = "Projet de mon site-web/portfolio (Flandre-Corentin) détaillant mon cursus (avec mon CV), mes projets informatiques et mes hobbies (sport et art) ! N’hésitez pas à me contacter si besoin :)"
}
