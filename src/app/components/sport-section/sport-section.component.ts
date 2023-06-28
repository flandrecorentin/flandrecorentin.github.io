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
  }

  titleResult = [
    'Itinérance Vosges-Brest',
    'Itinérance Vosges-Vanoise/Alpes',
    'Voyage Tour des Vosges',
    'Randonnée Juras (GR5)',
    'Randonée Traversée du Vercors',
    'Randonnée Vosges (GR5-été)',
    'Randonnée Vosges Ballon d\'Alsace (GR5-hiver)',
    'Randonnée Normandie Dieppe->Le Havre par Etretat (GR21)',
    'Randonnée Tour du Mont Blanc (TMB)',
    'Sortie vélo au Col de l\'Izoard',
    'Sortie vélo dans les Ecrins'
  ];
  descriptionResult = [
    // 1/11
    'Voyage en itinérance à vélo afin de parcourir la France d\'Est en Ouest. Départ dans les Vosges depuis Saint-Dié-des-Vosges et destination Brest. J\'ai voyagé avec un ami et nous sommes partis super léger avec très peu d\'affaires (sans tente, que à la belle étoile ou accueuillis chez des personnes rencontrées sur la route :)). Nous avons parcouru au total 1100km et fait 7000m D+ sur un total de 7 jours ! A la fin kouign-amann en récompense :)',
    // 2/11
    'Voyage en itinérance à vélo pour rejoindre les Alpes depuis les Vosges. Départ depuis Saint-Dié-des-Vosges à destination de Moutiers, au pied du Parc National de la Vanoise dans les Alpes. De nombreux cols sur le chemins. Itinéraire qui passe par la France, la Suisse et l\'Italie et qui finit sur le col de la Loze ! Nous avons parcouru au total 550km pour 10 000m D+.',
    // 3/11
    'Voyage à vélo pour faire le tour du Massif des Vosges. Au programme: col de la Schlucht, planche des Belles Filles, col du Calvaire, col de Lauvy etc. Tout ca sur 3/4 jours avec juste un sac de couchage dans le dos pour dormir à la belle étoiles aux sommets. Voyage avec un ami. ',
    // 4/11
    'Randonnée de 4 jours dans le massif du Juras, sur le GR5 (sur un morceau de Grandes Traversées du Juras) avec 2 amis sur une centaine de km. Dégusation de comte tout au long du chemin dans toutes les fermes rencontrées.',
    // 5/11
    'Randonnée de 4 jours dans le Vercors. Départ depuis Pont-en-Royans à destination de Luc-en-Diois. Jolies paysages constitués de vignes et de champs de lavande :)',
    // 6/11
    'Randonnée de 3 jours sur les traces du GR5 dans les Vosges. Randonnée en été et nuit en hamac pour changer de la tente. Ce chemin de randonnée est le plus fait dans les Vosges mais un des plus beau.',
    // 7/11
    'Même randonnée de 3 jours sur les traces du GR5 dans les Vosges mais en hiver (fin décembre). Nuit dans les différents abris gérés par le club Vosgien (club de randonnée de la région). Quelques chutes de neige pendant les 3 jours qui rendent plus difficile l\'itinéraire',
    // 8/11
    'Randonnée de 5/6 jours en itinérance (on a quelques fois été accueuillis chez des habitants). Avec deux amis, nous avons plus ou moins suivi les traces du GR21, l\'un des plus beau GR que j\'ai fait. Départ depuis Dieppe à destination du Havre. Magnifique points de vues sur les falaises de Normandie en passant par Etretat',
    // 9/11
    'Randonnée sur un morceau du fameux sentier du Tour du Mont Blanc. Par manque de temps il nous a été impossible de le faire en entier mais nous y reviendrons hors saison car beaucoup trop de monde. Visite de deux refuges sur le chemin.',
    // 10/11
    'Parmi mes sorties de vélo, j\'essaie au maximum de faire des cols pour un maximum de difficulté. Ici, col de la Loze lors d\'une sortie autour de la ville de Briançon à côté du massif des Ecrins.',
    // 11/11
    'Photo lors d\'une sortie dans le massif des Ecrins (département Hautes-Alpes) avec notamment une montée au pré de Madame Carles. Sortie où il est possible d\'appercevoir le glacier blanc, le glacier noir et le lac de l\'Eychauda.'

  ];
  imgResult = [
    'assets/sport/itinerance-velo-Vosges-Brest.jpg',
    'assets/sport/itinerance-velo-Vosges-Vanoise.jpg',
    'assets/sport/itinerance-tour-des-Vosges.jpg',
    'assets/sport/randonnee-GR5-Juras.jpg',
    'assets/sport/randonnee-Traversee-Vercors.jpg',
    'assets/sport/randonnee-GR5-Vosges-ete.jpg',
    'assets/sport/randonnee-GR5-Vosges-hiver.jpg',
    'assets/sport/randonnee-GR21-Normandie.jpg',
    'assets/sport/randonnee-TMB-Tour-du-Mont-Blanc.jpg',
    'assets/sport/velo-col-de-l-Izoard.jpg',
    'assets/sport/velo-Ecrins.jpg',

  ];
  altImgResult = [
    'Photo non disponible - voyage itinerance à velo entre Vosges et Brest, total de 1100km 7000D+ en 7jours',
    'Photo non disponible - voyage itinerance à velo entre Vosges et Vanoise(Alpes), total de 550km 10000D+ en 4jours',
    'Photo non disponible - voyage itinerance à vélo tour des Vosges, total de 350km 3000D+ en 3jours',
    'Photo non disponible - randonnée Juras (GR5), 4/5 jours',
    'Photo non disponible - randonnée traversée du Vercors, 4 jours',
    'Photo non disponible - randonnée Vosges été (GR5), 3 jours',
    'Photo non disponible - randonnée Vosges hiver (GR5), 3 jours',
    'Photo non disponible - randonnée Normandie Dieppe-Le Havre (GR21 par Etretat), 6 jours',
    'Photo non disponible - randonnée morceau du Tour du Mont Blanc (TMB)',
    'Photo non disponible - sortie vélo en passant au col de l\'Izoard',
    'Photo non disponible - sortie vélo en passant par les Ecrins'
  ];
  alignment=[
    'horizontal',
    'horizontal',
    'horizontal',
    'vertical',
    'vertical',
    'horizontal',
    'vertical',
    'vertical',
    'horizontal',
    'vertical',
    'vertical',
  ];
}
