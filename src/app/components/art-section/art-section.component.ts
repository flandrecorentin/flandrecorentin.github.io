import { Component } from '@angular/core';
import {GlobalVariable} from "../../global-variable";

@Component({
  selector: 'app-art-section',
  templateUrl: './art-section.component.html',
  styleUrls: ['./art-section.component.scss']
})
export class ArtSectionComponent {
  constructor(public param: GlobalVariable) {
  }

  description = [
    'Je pratique régulièrement le dessin (à crayons de couleurs aquarellables principalement). Je réalise aussi quelques dessins numériques (pixel art, courte animation et maquettes) qui me servent principalement dans mes projets personnels :).',
    'I regularly practice drawing (mainly with watercolor colored pencils). I also make some digital drawings (pixel art, short animation and models) which I use mainly in my personal projects :).'
  ];
  numSlide = 1;
  changeSlide($event: number) {
    this.numSlide = $event;
  }

  titleResult = [
    [
      'Dessin Planisphère',
      'Dessins SVG Animations',
      'Dessin montagne enneigée',
      'Dessin bord de l\'océan',
      'Dessin villa',
      'Dessin femme en fôret',
      'Dessin oiseau',
      'Dessin perspective',
    ],
    [
      'Planisphere drawing',
      'Drawings SVG Animations',
      'Snowy mountain drawing',
      'Waterside drawing',
      'Drawing villa',
      'Woman in the forest drawing',
      'Bird drawing',
      'Perspective drawing',
    ]

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
    [
      'Photo non disponible - dessin planisphère',
      'Photo non disponible - dessins SVG animations [Sera rajouté au prochain déploiement]',
      'Photo non disponible - dessin forêt avec montagne enneigée',
      'Photo non disponible - dessin plage au bord de l\'océan avec des voiliers et un phare',
      'Photo non disponible - dessin d\'une villa en nuance de noir',
      'Photo non disponible - dessin d\'une femme dans une petite forêt',
      'Photo non disponible - dessin d\'un oiseau sur une branche',
      'Photo non disponible - dessin en perspective de l\'intérieur d\'une chambre',
    ],
    [
      'Photo not available - planisphere drawing',
      'Photo not available - SVG drawings animations',
      'Photo not available - drawing forest with snowy mountain',
      'Photo not available - drawing beach by the ocean with sailboats and a lighthouse',
      'Photo not available - drawing of a villa in shades of black',
      'Photo not available - drawing of a woman in a small forest',
      'Photo not available - drawing of a bird on a branch',
      'Photo not available - perspective drawing of a bedroom interior',
    ]

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
