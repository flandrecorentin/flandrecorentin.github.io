import { Component } from '@angular/core';
import {GlobalVariable} from "../../global-variable";

@Component({
  selector: 'app-sport-section',
  templateUrl: './sport-section.component.html',
  styleUrls: ['./sport-section.component.scss']
})
export class SportSectionComponent {
  constructor(public param: GlobalVariable) {
  }
  description = [
    'En terme de sport, je pratique la course de fond (trails, semi-marathon, marathon), le cyclisme sur route, la randonnée et du tennis ! Je suis aussi gradé ceinture marron en karaté (2°kyu).',
    'In terms of sport, I practice long distance running (trails, half-marathon, marathon), road cycling, hiking and tennis! I am also graded brown belt in karate (2° kyu).'
  ];
  numSlide = 1;
  changeSlide($event: number) {
    this.numSlide = $event;
  }

  titleResult = [
    [
      'Itinérance Vosges -> Brest',
      'Itinérance Vosges -> Vanoise/Alpes',
      'Voyage Tour des Vosges',
      'Randonnée Juras (GR5)',
      'Randonée Traversée du Vercors',
      'Randonnée Vosges (GR5-été)',
      'Randonnée Vosges Ballon d\'Alsace (GR5-hiver)',
      'Randonnée Normandie Dieppe -> Le Havre par Etretat (GR21)',
      'Randonnée Tour du Mont Blanc (TMB)',
      'Sortie vélo au Col de l\'Izoard',
      'Sortie vélo dans les Ecrins'
    ],
    [
      'Roaming Vosges -> Brest',
      'Roaming Vosges -> Vanoise/Alpes',
      'Tour of Vosges',
      'Hiking Juras (GR5)',
      'Hiking Crossing of Vercors',
      'Hiking Vosges (GR5-summer)',
      'Hiking Vosges Ballon d\'Alsace (GR5-winter)',
      'Hiking Normandie Dieppe -> Le Havre by Etretat (GR21)',
      'Hiking Tour of Mont Blanc (TMB)',
      'Cycling at Col de l\'Izoard',
      'Cycling in the Ecrins massif'
    ]

  ];
  descriptionResult = [
    [
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
      'Parmi mes sorties de vélo, j\'essaie au maximum de faire des cols pour un maximum de difficulté. Ici, col de l\'Izoard lors d\'une sortie autour de la ville de Briançon à côté du massif des Ecrins.',
      // 11/11
      'Photo lors d\'une sortie dans le massif des Ecrins (département Hautes-Alpes) avec notamment une montée au pré de Madame Carles. Sortie où il est possible d\'appercevoir le glacier blanc, le glacier noir et le lac de l\'Eychauda.'
    ],
    [
      // 1/11
      'Roaming trip by bike to explore France from East to West. Departure in the Vosges from Saint-Dié-des-Vosges and destination Brest. I traveled with a friend and we left very light with very little stuff (no tent, only under the stars or hosted by people we met on the road :)). We traveled a total of 1100km and did 7000m D+ over a total of 7 days! At the end kouign-amann as a reward :)',
      // 2/11
      'Roaming trip by bike to reach the Alps from the Vosges massif. Departure from Saint-Dié-des-Vosges to Moutiers, at the foot of the Vanoise National Park in the Alps. Many passes on the way. Itinerary that passes through France, Switzerland and Italy and ends on the Col de la Loze! We traveled a total of 550km for 10,000m D+.',
      // 3/11
      'Bike trip around the Massif of Vosges. On the program: Col Schlucht, Planches des Belles Filles, Col Calvaire, Col Lauvy etc. All this over 3/4 days with just a sleeping bag in the back to sleep under the stars at the summits. Travel with a friend. ',
      // 4/11
      '4-day hike in the Juras massif, on the GR5 (on a section of Big Crossing of Juras) with 2 friends over a hundred km. Count (cheese) tasting along the way in all the farms encountered.',
      // 5/11
      '4-day hike in the Vercors Massif. Departure from Pont-en-Royans to Luc-en-Diois. Pretty landscapes made up of vineyards and lavender fields :))',
      // 6/11
      '3-day hike in the path of the GR5 in the Vosges. Hike in summer and night in a hammock to change from the tent. This hiking trail is the most done in the Vosges but one of the most beautiful.',
      // 7/11
      'Same 3-day hike than before in the path of the GR5 in the Vosges but in winter (end of December). Night in the various shelters managed by the Vosgien club (hiking club in the region). Some snowfall during the 3 days which makes the route more difficult',
      // 8/11
      '5/6 day roaming hike (we were sometimes hosted by locals). With two friends, we more or less followed in the path of the GR21, one of the most beautiful GRs I\'ve done. Departure from Dieppe to Le Havre. Magnificent views of the cliffs of Normandy via Etretat',
      // 9/11
      'Hike on a part of the famous Tour of Mont Blanc. For lack of time it was impossible for us to do it all but we will come back out of season because it is too crowded. Visit of two refuges on the way.',
      // 10/11
      'Among my bike outings, I try as much as possible to do mountain passes for maximum difficulty. Here, Col of Izoard during an outing around the town of Briançon next to the Ecrins massif.',
      // 11/11
      'Photo during an outing in the Ecrins massif (Hautes-Alpes department) with in particular a climb to the meadow of Madame Carles. Outing where it is possible to see the white glacier, the black glacier and the lake of Eychauda.'
    ]

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
    [
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
    ],
    [
      'Photo not available - cycling trip between Vosges and Brest, total of 1100km 7000D+ in 7days',
      'Photo not available - cycling trip between Vosges and Vanoise (Alps), total of 550km 10000D+ in 4 days',
      'Photo not available - cycling trip around the Vosges, total of 350km 3000D+ in 3days',
      'Photo not available - Juras hike (GR5), 4/5 days',
      'Photo not available - hike across the Vercors, 4 days',
      'Photo not available - Vosges summer hike (GR5), 3 days',
      'Photo not available - winter Vosges hike (GR5), 3 days',
      'Photo not available - Normandy Dieppe-Le Havre hike (GR21 via Etretat), 6 days',
      'Photo not available - hiking part of the Tour du Mont Blanc (TMB)',
      'Photo not available - bike ride passing the Izoard pass',
      'Photo not available - bike ride through the Ecrins'
    ]

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
