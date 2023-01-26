import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  isALink=[
    ['yes','fa-brands fa-github fa-2x'],
    ['no', 'fa-brands fa-github fa-2x'],
    ['no', 'fa-brands fa-github fa-3x'],
    ['no', 'fa-brands fa-github fa-3x'],
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
    ['link1', 'link2'],
    ['link1', 'link2'],
    ['link1', 'link2'],
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
    [   'Pedagogical-Spreadsheet',
        'description blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla',
    ],
    // [1] -> 2/x
    [   'title',
      'description blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla ',
    ],
    // [2] -> 3/x
    [   'title',
      'description blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla ',
    ],
    // [3] -> 4/x
    [   'title',
      'description',
    ],
    // [4] -> 5/x
    [   'title',
      'description',
    ],
    // [5] -> 6/x
    [   'title',
      'description',
    ],
    // [6] -> 7/x
    [   'title',
      'description',
    ],
    // [7] -> 8/x
    [   'title',
      'description',
    ],
    // [8] -> 9/x
    [   'title',
      'description',
    ],
    // [9] -> 10/x
    [   'title',
      'description',
    ],
    // [10] -> 11/x
    [   'title',
      'description',
    ]
  ];
}
