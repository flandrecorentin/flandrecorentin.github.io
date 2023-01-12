import { Component } from '@angular/core';

@Component({
  selector: 'app-sport-section',
  templateUrl: './sport-section.component.html',
  styleUrls: ['./sport-section.component.scss']
})
export class SportSectionComponent {
  description = 'En terme de sport, je pratique la course de fond (trails, semi-marathon, marathon), le cyclisme sur route, la randonnée et du tennis ! Je suis aussi gradé ceinture marron en karaté (2°kyu).';
  numSlide = 1;
  changeSlide($event: number) {
    this.numSlide = $event;
    console.log('change slide' + $event);
  }

  titleResult = [
    'Itinérance Vosges-Brest',
    'Itinérance Vosges-Vanoise/Alpes',
    'Voyage Tour des Vosges',
    'Randonnée Juras (GR5)',
    'Randonnée Vosges (GR5-été)',
    'Randonnée Vosges Ballon d\'Alsace (GR5-hiver)',
    'Randonnée Normandie Dieppe->Le Havre par Etretat (GR21)',
    'Randonnée Tour du Mont Blanc (TMB)',
    'Sortie vélo au Col de l\'Izoard',
    'Sortie vélo dans les Ecrins'
  ];
  descriptionResult = [
    // 1/10
    'Voyage en itinérance à vélo afin de parcourir la France d\'Est en Ouest. Départ dans les Vosges depuis Saint-Dié-des-Vosges et destination Brest. J\'ai voyagé avec un ami et nous sommes partis super léger avec très peu d\'affaires (sans tente, que à la belle étoile ou accueuillis chez des personnes rencontrées sur la route :)). Nous avons parcouru au total 1100km et fait 7000m D+ sur un total de 7 jours ! A la fin kouign-amann en récompense :)',
    // 2/10
    'Voyage en itnérance à vélo pour rejoindre les Alpes depuis les Vosges. Départ depuis Saint-Dié-des-Vosges à destination de Moutiers, au pied du Parc National de la Vanoise dans les Alpes. De nombreux cols sur le chemins. Itinéraire qui passe par la France, la Suisse et l\'Italie et qui finit sur le col de la Loze ! Nous avons parcouru au total 550km pour 10 000m D+.',
    // 3/10
    'Voyage',
    // 4/10
    'blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question',
    // 5/10
    'blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question',
    // 6/10
    'blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question',
    // 7/10
    'blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question',
    // 8/10
    'blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question',
    // 9/10
    'blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question',
    // 10/10
    'blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne questionblablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question blablablabla a modifierblablablabla a modifierb super mega bien je sais pas ca c\'est une bonne question'
  ];
  imgResult = [
    'assets/sport/itinerance-velo-Vosges-Brest.jpg',
    'assets/sport/itinerance-velo-Vosges-Vanoise.jpg',
    'assets/sport/itinerance-tour-des-Vosges.jpg',
    'assets/sport/randonnee-GR5-Juras.jpg',
    'assets/sport/randonnee-GR5-Vosges-ete.jpg',
    'assets/sport/randonnee-GR5-Vosges-hiver.jpg',
    'assets/sport/randonnee-GR21-Normandie.jpg',
    'assets/sport/randonnee-TMB-Tour-du-Mont-Blanc.jpg',
    'assets/sport/velo-col-de-l-Izoard.jpg',
    'assets/sport/velo-Ecrins.jpg'
  ];
  altImgResult = [
    'Photo non disponible - voyage itinerance à velo entre Vosges et Brest, total de 1100km 7000D+ en 7jours',
    'Photo non disponible - voyage itinerance à velo entre Vosges et Vanoise(Alpes), total de 550km 10000D+ en 4jours',
    'Photo non disponible - voyage itinerance à vélo tour des Vosges, total de 350km 3000D+ en 3jours',
    'Photo non disponible - randonnée Juras (GR5), 4/5 jours',
    'Photo non disponible - randonnée Vosges été (GR5), 3 jours',
    'Photo non disponible - randonnée Vosges hiver (GR5), 3 jours',
    'Photo non disponible - randonnée Normandie Dieppe-Le Havre (GR21 par Etretat)',
    'Photo non disponible - randonnée morceau du Tour du Mont Blanc (TMB)',
    'Photo non disponible - sortie vélo en passant au col de l\'Izoard',
    'Photo non disponible - sortie vélo en passant par les Ecrins'
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
