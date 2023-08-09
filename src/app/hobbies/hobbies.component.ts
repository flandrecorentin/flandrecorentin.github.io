import {Component} from '@angular/core';
import {GlobalVariable} from "../global-variable";

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent {
  constructor(public param: GlobalVariable) {
  }
  textHobbies = [
    [
      "Sur mon temps libre, outre travailler sur mes projets personnels, je pratique beaucoup de sports longue durée (course de fond, cyclysme etc.). J'ai réalisé plusieurs voyages d'itinérance à vélo ou à pied dont j'aime beaucoup parler :). De plus, je réalise régulièrement quelques dessins à crayons ou numériques. J'aime aussi beaucoup lire du réalisme et mon livre favori est Le Comte de Monte-Cristo !",
      "Cliquez sur les boutons 'Sport' ou 'Art' pour en apprendre plus !"
    ],
    [
      "In my free time, besides working on my personal IT projects, I practice a lot of long-term sports (trail, cycling, etc.). I have made several roaming trips by bike or on foot which I really like to talk about :). In addition, I regularly make some pencil or digital drawings. I also really like to read realism literature and my favorite book is 'Le Comte de Monte-Cristo'!",
      "Click on the 'Sport' or 'Art' buttons to learn more!"
    ]
  ]
}
