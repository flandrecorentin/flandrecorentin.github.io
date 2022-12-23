import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  githubInfos=['GitHub', 'Retrouvez mon github avec tout mes projets publiques :)','https://github.com/flandrecorentin', 'fa-brands fa-github fa-3x'];
  linkedinInfos=['LinkedIn', 'Pour me contacter sur LinkedIn (peu actif donc si important favorisez le mail)','https://fr.linkedin.com/in/corentin-flandre-109042202', 'fa-brands fa-linkedin-in fa-3x'];
  mailInfos = ['Mail','Me contacter par mail à l adresse flandrecorentin@gmail.com','contact' ,'fa-regular fa-envelope fa-3x'];
  phoneInfos = ['Telephone','Me contacter par téléphone: 07.80.31.46.98','contact' ,'fa-solid fa-phone fa-3x'];
}
