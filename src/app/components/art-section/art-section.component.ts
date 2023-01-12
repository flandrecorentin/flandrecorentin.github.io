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
    this.numSlide = $event;
    console.log('change slide' + $event);
  }

  titleResult = [
    'Dessin Planisphère',
    'Dessins SVG Animations',
    'Dessin montagne enneigée',
    'Dessin bord de l\'océan',
    'Dessin villa',
    'Dessin femme en fôret',
    'Dessin oiseau',
    'Dessin perspective',
  ];
  descriptionResult = [
    // 1/10
    '',
    // 2/10
    '',
    // 3/10
    '',
    // 4/10
    '',
    // 5/10
    '',
    // 6/10
    '',
    // 7/10
    '',
    // 8/10
    ''
  ];
  imgResult = [
    'assets/art/dessin-planisphere.jpg',
    'assets/art/dessin-svg.jpg',
    'assets/art/dessin-foret-montagne.jpg',
    'assets/art/dessin-ocean-plage.jpg',
    'assets/art/dessin-villa.jpg',
    'assets/art/dessin-femme-foret.jpg',
    'assets/art/dessin-oiseau.jpg',
    'assets/art/dessin-perspective.jpg',
  ];
  altImgResult = [
    'Photo non disponible - dessin planisphère',
    'Photo non disponible - dessins SVG animations',
    'Photo non disponible - dessin forêt avec montagne enneigée',
    'Photo non disponible - dessin plage au bord de l\'océan avec des voiliers et un phare',
    'Photo non disponible - dessin d\'une villa en nuance de noir',
    'Photo non disponible - dessin d\'une femme dans une petite forêt',
    'Photo non disponible - dessin d\'un oiseau sur une branche',
    'Photo non disponible - dessin en perspective de l\'intérieur d\'une chambre',
  ];
  alignment=[
    'horizontal',
    'horizontal',
    'horizontal',
    'horizontal',
    'horizontal',
    'vertical',
    'vertical',
    'horizontal',
  ];

  ArtOrNot = "true";
}
