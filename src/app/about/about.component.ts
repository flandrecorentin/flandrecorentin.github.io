import {Component} from '@angular/core';
import {GlobalVariable} from "../global-variable";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(public param: GlobalVariable) {
  }
  textTitleAbout = ["A propos du site","About the website"]
  textTitleToolsList = ["Outils utilisés", "IT tools used"]
  textDescription = [
    "Projet de mon site-web/portfolio (Flandre-Corentin) détaillant mon cursus (avec mon CV), mes projets informatiques et mes hobbies (sport et art) ! N’hésitez pas à me contacter si besoin :)",
    "Project of my website/portfolio (Flandre-Corentin) detailing my curriculum (with my CV), my IT projects and my hobbies (sport and art)! Feel free to contact me if needed :)"
    ]
  toolList = [
    [
      "Angular 15.0.4 : framework opensource basé sur Typescript",
      "IntelliJ 2022.2.3 & WebStorm 2022.3 : IDE utilisés",
      "Git 2.25.1 et GitHub : Logiciel de gestion de version et répertoire en ligne ",
      "Figma : outil graphique utilisé pour la maquette du site",
      "Boxy-svg-app : outil pour la création d'image SVG",
      "Font-awesome : outil et bibliothèque d'icones",
      "SVG Repo : inspiration de quelques SVG",
      "Google fonts : police d'écriture utilisés",
      "Mon cerveau : car mine de rien il faut réfléchir parfois : )"
    ],
    [
      "Angular 15.0.4 : Typescript-based opensource framework",
      "IntelliJ 2022.2.3 & WebStorm 2022.3 : IDEs",
      "Git 2.25.1 et GitHub : Version management sofware and online repository",
      "Figma : Graphics editor used for site design/layout",
      "Boxy-svg-app : SVG image creation tool",
      "Font-awesome : Icon library",
      "SVG Repo : inspiration for somes SVGs",
      "Google fonts : fonts used",
      "My brain: beacause sometimes I have to think and imagine : )"
    ]
  ]
  textGithub = [" Mon GitHub", " My GitHub"]
}
