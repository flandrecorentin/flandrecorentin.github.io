import {Component} from '@angular/core';
import {GlobalVariable} from "../../global-variable";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  textButtonContact = ['Me Contacter','Contact me'];
  linkButtonContact = './contact';
  textButtonAbout = ['A Propos','About'];
  linkButtonAbout = './about';
  styleClassFooter = "styleFooter";
  textFooter = [
    ["Le site web a été développé par moi (Flandre Corentin), merci de ne pas utiliser les ressources créées sans mon autorisation puisque oui les animations sont faites à la main :)", "N’hésitez pas à me contacter en cas de problèmes/questions"],
    ["The website was developed by me (Flandre Corentin), please do not use the resources created without my authorisation as the animations are hand-made :)","Don't hesitate to contact me if you have any issues."]
  ]
  textCopyright =[
    ["Tous droits réservés", " flandrecorentin (2023)"],
    ["All rights reserved", " flandrecorentin (2023)"],
  ]


  constructor(public param: GlobalVariable) {
  }
}
