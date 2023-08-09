import {Component} from '@angular/core';
import {GlobalVariable} from "../global-variable";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(public param: GlobalVariable) {
  }
  textTitleITProjects = ['Projets informatiques', 'IT/Computer projects']

  // first project

  // last project

  isALink=[
    ['yes', 'fa-brands fa-github fa-2x'],
    ['no', 'fa-brands fa-github fa-2x'],
    ['yes', 'fa-regular fa-address-card fa-2x'],
    ['yes', 'fa-solid fa-link fa-2xl'],
    ['yes',  'fa-brands fa-docker fa-2x'],
    ['yes',  'fa-brands fa-github fa-2x'],
    ['yes',  'fa-brands fa-java fa-3x'],
    ['yes',  'fa-brands fa-github fa-2x'],
    ['yes',  'fa-brands fa-github fa-2x'],
    ['yes',  'fa-brands fa-codepen   fa-2x'],
    ['yes',  'fa-brands fa-github fa-2x'],
    ['yes',  'fa-brands fa-github fa-2x']
  ];
  imagesLinks=[
    ['assets/IT-projects/Pedagogical-Spreadsheet/test1.png', 'assets/IT-projects/Pedagogical-Spreadsheet/test2.png'],
    ['assets/IT-projects/Deliverapp/tournees-calculees.jpg', 'assets/IT-projects/Deliverapp/ajout-livraison.jpg', 'assets/IT-projects/Deliverapp/feuille-de-route.png'],
    ['assets/IT-projects/Portfolio-Flandre-Corentin/home.jpg', 'assets/IT-projects/Portfolio-Flandre-Corentin/hobbies.jpg'],
    ['assets/IT-projects/Aperit\'IF/aperitif.jpg', 'assets/IT-projects/Aperit\'IF/research.jpg', 'assets/IT-projects/Aperit\'IF/mojito.jpg', 'assets/IT-projects/Aperit\'IF/rum.jpg'],
    ['assets/IT-projects/miniged/schema.jpg'], // TODO rajouter photos miniged
    ['assets/IT-projects/C-Messagerie/img1.png', 'assets/IT-projects/C-Messagerie/img2.png', 'assets/IT-projects/C-Messagerie/img3.png'],
    ['assets/IT-projects/Mini-jeu-JAVA/demineur1.png', 'assets/IT-projects/Mini-jeu-JAVA/demineur2.png', 'assets/IT-projects/Mini-jeu-JAVA/casse-briques.png', 'assets/IT-projects/Mini-jeu-JAVA/snake.jpg', 'assets/IT-projects/Mini-jeu-JAVA/home.jpg'],
    ['assets/IT-projects/TrajetC++/test1.png', 'assets/IT-projects/TrajetC++/test2.png', 'assets/IT-projects/TrajetC++/test3.png', 'assets/IT-projects/TrajetC++/test4.png', 'assets/IT-projects/TrajetC++/test5.png', 'assets/IT-projects/TrajetC++/test6.png', 'assets/IT-projects/TrajetC++/test7.png'],
    ['assets/IT-projects/eau-the-l-eau/game1.png', 'assets/IT-projects/eau-the-l-eau/game2.png', 'assets/IT-projects/eau-the-l-eau/choice-player.png'],
    ['assets/IT-projects/Ancien-Portfolio/home.jpg', 'assets/IT-projects/Ancien-Portfolio/cursus.jpg', 'assets/IT-projects/Ancien-Portfolio/projects.jpg', 'assets/IT-projects/Ancien-Portfolio/hobbies.jpg', 'assets/IT-projects/Ancien-Portfolio/diaporama-sport.jpg', 'assets/IT-projects/Ancien-Portfolio/diaporama-art.jpg'],
    ['assets/IT-projects/FamillyWall/home.png', 'assets/IT-projects/FamillyWall/register.png'],
    ['link1', 'link2']
  ];
  links = [
    'https://github.com/flandrecorentin/Pedagogical-Spreadsheet',
    'https://github.com/flandrecorentin/Deliverapp',
    'about',
    'https://alexisreis.github.io/AperitIF/',
    'https://flandrecorentin.notion.site/Documentation-miniged-d0682cd62f4a48aea9d714b1e5daa6bf',
    'https://github.com/flandrecorentin/Messagerie4IF_G2_S1',
    'https://github.com/flandrecorentin/Mini-jeu_JAVA',
    'https://github.com/flandrecorentin/TrajetC/',
    'https://github.com/flandrecorentin/eau-the-l-eau',
    'https://flandrecorentin.github.io/Ancien-Portfolio-Flandre-Corentin/',
    'https://github.com/flandrecorentin/familywall',
    'https://github.com/flandrecorentin/Machine-Learning-Project',
  ];
  hobbies=[
    // [0] -> 1/x
    [   '[1] Pedagogical-Spreadsheet',
        'Pedagogical-Spreadsheet est une application de type tableur gérant des feuilles de calcul pour l\'apprentissage des outils scientifiques dans le monde de l\'éducation (entre autre). L\'application rassemble toutes les fonctions essentielles primaires et utiles pour apprendre à manier un tableur. Il est ainsi possible de faire de nombreux calculs et opérations,  de tracer des diagrammes et des jeux permettent de découvrir toutes les fonctionnalités de Pedagogical-Spreadsheet. Il s\'agit d\'un projet personnel réalisé à 2 et représente pour l\'instant (projet non fini) environ 60h de mon temps perso. Il est codé en Java et utilise la bibliothèque JavaFX et un peu de CSS pour les interfaces.',
    ],
    // [1] -> 2/x
    [   '[2] Deliverapp',
      'Deliverapp est une application qui calcule les meilleures tournées de livraisons de colis.  Cela prend en compte l\'adresse et le créneau de livraison et les livreurs. Deliverapp proposent différentes fonctionnalités: ajout/modification/suppression d\'une livraison, calcul de tournées, impression de la feuille de route (chemin et horaires d\'une tournée), sauvegarde/chargement des listes de livraisons, ajout/suppresion rapide d\'une livraison après calcul, etc. Il s\'agit d\'un projet universitaire réalisé en hexanôme et représente de 72h de travail par personne (moitié en séance et moitié en dehors). Deliverapp est codé en Java 19.0.1 et utilise la bibliothèque JavaFX pour les interfaces. L\'organisation du projet a utilisé la méthodologie Agile.',
    ],
    // [2] -> 3/x
    [   '[3] Portfolio-Flandre-Corentin',
      'Comme vous l\'aurez compris ce projet est le site-web sur lequel vous vous trouvez qui est mon portfolio perso afin d\'en découvrir davantage sur moi: mon cursus scolaire et professionnel, mes différents projets informatiques (personnels, universitaire et professionels) et ainsi que mes hobbies. C\'est un projet personnel qui représente environ 60h de travail en prenant en compte l\'apprentissage des technologies. Le site a été dévéloppé à l\'aide du framework Angular 15.0.4. Il sera normalement publié dés que j\'aurais mon propre nom de domaine et de quoi faire tourner le serveur web.',
    ],
    // [3] -> 4/x
    [   '[4] Aperit\'IF',
      'Aperit\'IF est un moteur de recherche de cocktail et d\'ingrédients. Via la barre de recherche, Aperit\'IF permet de chercher un cocktail à partir de son nom afin d\'obtenir sa description, sa recette (avec les quantités en fonctions du nombre de personnes), une image et ses indices de services. Il s\'agit d\'un projet universitaire réalisé en hexanôme dans le but de découvrir le web sémantique. Cela représente environ 24h de travail par personne (moitié séance, moitié perso). Aperi\'IF est un site web développé avec le framework React et tire ses données de Wikidata et DBpedia avec des requêtes SPARQL.',
    ],
    // [4] -> 5/x
    [   '[5] miniged',
      'miniged est une application web de type GED (Gestionnaire Electronique de Documents) simplifiée. Il permet de gérer des documents de certains types contenant schémas de métadonnées de spécifiques dans le cloud. miniged propose notamment un plan de classement de documents virtuel intelligent. Le projet est orchestré et déployé par Docker et Docker-composer. miniged est conmposé d\'un backend Java utilisant le framework Spring et l\'API REST, d\'un frontend réalisé avec le framework Vue.Js 3, d\'une base de données non relationnelle MongoDB et d\'un service Minio pour stocker les pièces jointes dans le cloud. Le projet miniged a été réalisé seul dans le cadre d\'un POC durant un stage de 2 mois dans lequel j\'étais notamment chargé de définir mes propres spécifications. Le code source n\'est pas disponible pour des raisons de confidentialité.',
    ],
    // [5] -> 6/x
    [   '[6] C-Messagerie',
      'C-Messagerie est une micro application de messagerie développé en C uniquement dans le cadre universitaire. C-Messagerie utilise une architecture centralisée avec un serveur et n clients. L\'application permet d\'échanger des messages en directs différentes sessions. Les fonctionnalités principales sont: connexion via login/mdp, échange de message en direct entre utilisateurs, historique de message, création de groupe d\'utilisateurs, traitement de l\'horaire des messages et mise en place de la possibilité de cryptage. Le projet a été réalisé en 12h en TP en binôme avec un ami.',
    ],
    // [6] -> 7/x
    [   '[7] Mini_jeu_Java',
      'Mini_jeu_Java est une plateforme de 3 minis-jeux que j\'ai développé lorsque j\'ai commencé l\'informatique. Cette plateforme comporte un démineur, un casse brique et le jeu "snake". Ce sont des jeux codés en Java et utilisent la bibliothèque Swing pour l\'interface (qui laisse à désirer certes ahah). J\'ai passé beaucoup de temps pour apprendre de nombreuses notions sur le langage Java (Programmation orientée objet, héritage, interface avec swing et API)...',
    ],
    // [7] -> 8/x
    [   '[8] Trajet C++',
      'Trajet C++ est une application sur terminal codé en C++ dans le cadre d\'un projet universitaire de 3° année d\'INSA. L\'application permet de gérer un catalogue de divers trajets et comporte de nombreuses fonctionnalités: impression du catalogue, ajout de trajet simple, ajout de trajet complexe (combinaise de trajets simples ou complexes), recherche, chargement d\'un catalogue, sauvegarde d\'un catalogue. Trajet C++ représente 16heures de travail et a été fait avec un ami..',
    ],
    // [8] -> 9/x
    [   '[9] eau-the-l-eau (TP IA)',
      'Derrière ce jeu de mot (plus que médiocre je vous l\'accorde) réalisé par moi même, se cache le jeu de l\'othello. Ce projet universitaire a pour but de s\'initier à l\'IA en analysant la puissance des algorithmes qui existent pour gagner à l\'othello et à la création d\'heuristiques pour améliorer/perfectionner l\'IA. On arrive à une IA capable de jouer en temps raisonnable le meilleur coup en profondeur 4. Le projet est réalisé en hexanôme tout en Prolog mais le code est grandement tiré de l\'utilisateur GitHub pchampio, nous avons principalement fait de l\'analyse et de la modification de code. Ce projet nous a pris 12h par personne.',
    ],
    // [9] -> 10/x
    [   '[10] Ancien Portfolio',
      'Comme son nom l\'indique, il s\'agit de mon premier Portfolio et même de mon premier site web que j\'ai créé. Pour ce projet j\'ai réalisé mes maquettes sur l\'outil Figma. Au niveau technologie c\'etait l\'occasion d\'apprendre HTML/CSS/JavaScript.',
    ],
    // [10] -> 11/x
    [   '[11] FamilyWall',
      '[Projet en cours] FamilyWall est une application web de messagerie en ligne maximisant l\'expérience utilisateur à fort enjeu environnementaux et sociétaux. FamilyWall est très sécurisé (protocole de cryptage de bout en bout, fonctionnalités sans dangers: pas de suggestion d\'amis etc.), très respectueux de l\'environnement possible (suppression d\'historique au bout de X temps déterminé par l\'utilisateur, baisse de la qualité des fichiers médias sauf contre-indication de l\'utilisateur). L\'objectif de FamilyWall est de pouvoir communiquer à distance de manière simple et raisonnable :)',
    ],
      // [11] -> 12/x
      [   '[12] TP Machine Learning',
      'Le TP (Travaux Pratique) de Machine Learning est un projet universitaire qui consiste à partir d\'un jeu de données d\'estimer/prédire au mieux le prix de vente d\'une maison. Il parcourt différentes notions de ML: classification, arbre de décision, compromis biais/variance, régression (linéaire, ridge, ridge à noyau), apprentissage bayésien, modèles de Marko, inférence variationnelle etc. Ce TP de Machine Learning en équipe de 3 représente 16h de travail par personne.',
      ]
  ];
}
