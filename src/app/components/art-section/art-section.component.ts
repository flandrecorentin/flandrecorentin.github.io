import { Component } from '@angular/core';

@Component({
  selector: 'app-art-section',
  templateUrl: './art-section.component.html',
  styleUrls: ['./art-section.component.scss']
})
export class ArtSectionComponent {
  description = 'Je pratique régulièrement le dessin (à crayons de couleurs aquarellables principalement). Je réalise aussi quelques dessin numériques (pixel art, courte animation et maquettes) qui me servent principalement dans mes projets personnels :).';
  numSlide = 1;
  changeSlide($event: number) {
    console.log('change slide' + $event);
  }

  titleResult = [
    'Dessin',
    'Dessin',
    'Dessin',
    'Dessin',
    'Dessin',
    'Dessin',
    'Dessin',
    'Dessin',
  ];
  descriptionResult = [
    // 1/10
    'blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question',
    // 2/10
    'blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question',
    // 3/10
    'blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question',
    // 4/10
    'blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question',
    // 5/10
    'blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question',
    // 6/10
    'blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question',
    // 7/10
    'blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question',
    // 8/10
    'blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question'
  ];
  imgResult = [
    'assets/art/',
    'assets/art/',
    'assets/art/',
    'assets/art/',
    'assets/art/',
    'assets/art/',
    'assets/art/',
    'assets/art/',
  ];
  altImgResult = [
    'Photo non disponible - dessin ',
    'Photo non disponible - dessin ',
    'Photo non disponible - dessin ',
    'Photo non disponible - dessin ',
    'Photo non disponible - dessin ',
    'Photo non disponible - dessin ',
    'Photo non disponible - dessin ',
    'Photo non disponible - dessin ',
  ];
  alignment=[
    'horizontal',
    'horizontal',
    'horizontal',
    'vertical',
    'horizontal',
    'vertical',
    'vertical',
    'horizontal',
    'vertical',
    'vertical',
  ];


}
