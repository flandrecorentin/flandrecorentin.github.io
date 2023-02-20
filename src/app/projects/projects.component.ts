import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  isALink=[
    ['yes','fa-brands fa-github fa-2x'],
    ['yes', 'fa-brands fa-github fa-2x'],
    ['yes', 'fa-brands fa-github fa-3x'],
    ['yes', 'fa-brands fa-github fa-3x'],
    ['no', 'fa-brands fa-github fa-3x'],
    ['no', 'fa-brands fa-github fa-3x'],
    ['no', 'fa-brands fa-github fa-3x'],
    ['no', 'fa-brands fa-github fa-3x'],
    ['no', 'fa-brands fa-github fa-3x'],
    ['no', 'fa-brands fa-github fa-3x'],
    ['no', 'fa-brands fa-github fa-3x'],
    ['no', 'fa-brands fa-github fa-3x']
  ];
  imagesLinks=[
    ['assets/IT-projects/Pedagogical-Spreadsheet/test1.png', 'assets/IT-projects/Pedagogical-Spreadsheet/test2.png'],
    ['assets/IT-projects/Deliverapp/tournees-calculees.jpg', 'assets/IT-projects/Deliverapp/ajout-livraison.jpg', 'assets/IT-projects/Deliverapp/feuille-de-route.png'],
    ['assets/dessin-montagne-resize4.jpg', 'link2'],
    ['link1', 'link2'],
    ['link1', 'link2'],
    ['link1', 'link2'],
    ['link1', 'link2'],
    ['link1', 'link2'],
    ['link1', 'link2'],
    ['link1', 'link2'],
    ['link1', 'link2'],
    ['link1', 'link2']
  ];
  links = [
    'https://github.com/flandrecorentin/Pedagogical-Spreadsheet',
    'linkProject',
    'linkProject',
    'linkProject',
    'linkProject',
    'linkProject',
    'linkProject',
    'linkProject',
    'linkProject',
    'linkProject',
    'linkProject',
    'linkProject',
  ];
  hobbies=[
    // [0] -> 1/x
    [   '[1] Pedagogical-Spreadsheet',
        'Pedagogical-Spreadsheet est une application de type tableur gérant des feuilles de calcul pour l\'apprentissage des outils scientifiques dans le monde de l\'éducation.',
    ],
    // [1] -> 2/x
    [   '[2] Deliverapp',
      'description blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla ',
    ],
    // [2] -> 3/x
    [   '[3] Portfolio-Flandre-Corentin',
      'description blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla ',
    ],
    // [3] -> 4/x
    [   '[4] Aperit\'IF',
      'description blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla',
    ],
    // [4] -> 5/x
    [   '[5] miniged',
      'description blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla',
    ],
    // [5] -> 6/x
    [   '[6] C Messagerie',
      'description blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla',
    ],
    // [6] -> 7/x
    [   '[7] Mini_jeu_Java',
      'description blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla',
    ],
    // [7] -> 8/x
    [   '[8] Trajet C++',
      'description blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla',
    ],
    // [8] -> 9/x
    [   '[9] eau-the-l-eau',
      'description blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla',
    ],
    // [9] -> 10/x
    [   '[10] ancien Portfolio',
      'description blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla',
    ],
    // [10] -> 11/x
    [   '[11] FamillyWall',
      'description blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla',
    ]
  ];
}
