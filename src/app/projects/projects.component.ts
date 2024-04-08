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


    // *****************************************************************
    // *******************---------IT-PROJECTS-------*******************
    // *****************************************************************
    Infos: {
        title: string[],
        description: string[][][], // manage bold|important text alterning between not bold and bold
        activeAllLinks: boolean,  // yes|no and logo
        imagesPaths: string  [],
        links?: [boolean, string, string][],
        styleDisplay?: string
    } = {
        title: ["frenchtitle", "englishtitle"],
        description: [
            [
                // FRENCH
                [
                    "normal",
                    "bolt",
                    "normal"
                ],
                [
                    ""
                ],
                [
                    ""
                ]
            ],
            // ENGLISH
            [
                [
                    "normal",
                    "bolt",
                    "normal"
                ],
                [
                    ""
                ],
                [
                    ""
                ]
            ]
        ],
        activeAllLinks: true,
        links: [
            [false, "", "fa-brands fa-github fa-2x"],
            [false, "", "fa-solid fa-link fa-2xl"],
            [false, "", "fa-brands fa-docker fa-2x"],
            [false, "", "fa-brands fa-java fa-3x"],
            [false, "", "fa-brands fa-java fa-3x"],
            [false, "", "fa-solid fa-download fa-2xl"]
        ],
        imagesPaths: [
            ""
        ],
        styleDisplay: ""
    }

  // StravaSeries
  stravaSeries: {
    title: string[],
    description: string[][][], // manage bold|important text alterning between not bold and bold
    activeAllLinks: boolean,  // yes|no and logo
    imagesPaths: string  [],
    links?: [boolean, string, string][],
    styleDisplay?: string
  } = {
    title: ["Strava-Series", "Strava-Series"],
    description: [
      [
        // FRENCH
        [
          "[Projet en cours de développement] Strava-Series est une ",
          "extension Strava ",
          "qui permet de gérer des ensembles d'activités. Il est possible de créer des séries de type ",
          "Itinérance, Randonnée, Vélotaf et Thriatlon. "
        ],
        [
          "Strava-Series permet ainsi de faire un resumé statistiques total de la série ",
          "automatiquement à partir de votre profil Strava",
          " (total distance, temps, D+, nombre de jours actifs etc.). L'objectif est aussi de créer une carte global retracant le parcours d'une itinérance/randonnée, s'affronter entre amis sur des stastistiques de vélotaf. Une fonctionnalité que je souhaiterai implémenté serai une suggestion, avec modèle ML, d'une série potentiel à faire parmi ses abonnés Strava.",
        ],
        [
          "Le projet utilise les API et les services de Strava. A chaque nouvelle fonctionnalité majeure, je réalise le déploiement sur mon domaine dédié."
        ]
      ],
      // ENGLISH
      [
        [
          "[Project under development] Strava-Series is a ",
          "Strava extension ",
          "hat allows managing sets of activities. It is possible to create series of types such as ",
          "Itinerancy, Hiking, Velotaf (Cycling work), and Triathlon."
        ],
        [
          "Strava-Series enables generating a comprehensive statistical summary of the series ",
          "automatically from your Strava profile ",
          "(total distance, time, elevation gain, number of active days, etc.). The goal is also to create a global map retracing the route of a trek/hike, compete with friends on bike commuting statistics. One feature that I would like to implement is a suggestion, using ML models, of a potential series to do among Strava subscribers.",
        ],
        [
          "The project uses Strava's APIs and services. With each new major feature, I deploy it on my dedicated domain."
        ]
      ]
    ],
    activeAllLinks: true,
    links: [
      [true, "https://github.com/flandrecorentin/strava-series", "fa-brands fa-github fa-2x"],
      [true, "https://strava-series.flandrecorentin.com/", "fa-solid fa-link fa-2xl"],
      [false, "", "fa-brands fa-docker fa-2x"],
      [false, "", "fa-brands fa-java fa-3x"],
      [false, "", "fa-brands fa-java fa-3x"],
      [false, "", "fa-solid fa-download fa-2xl"]
    ],
    imagesPaths: [
      'assets/IT-projects/Strava-Series/series.png',
      'assets/IT-projects/Strava-Series/profile.png',
      'assets/IT-projects/Strava-Series/connection.png'
    ],
    styleDisplay: ""
  }


    // Pedagogical Spreadsheet
    pedagogicalSpreadsheetInfos: {
        title: string[],
        description: string[][][], // manage bold|important text alterning between not bold and bold
        activeAllLinks: boolean,  // yes|no and logo
        imagesPaths: string  [],
        links?: [boolean, string, string][],
        styleDisplay?: string
    } = {
        title: ["Pedagogical-Spreadsheet", "Pedagogical-Spreadsheet"],
        description: [
            [
                // FRENCH
                [
                    "[Projet non finie] Pedagogical-Spreadsheet est une application de type ",
                    "tableur",
                    " gérant des feuilles de calcul ",
                    "pour l'apprentissage des outils scientifiques de manière éducative",
                    " (entre autre). L'application rassemble toutes les fonctions essentielles primaires et utiles pour apprendre à manier un tableur. Il est ainsi possible de faire de nombreux calculs et opérations,  de tracer des diagrammes et des jeux permettent de découvrir toutes les fonctionnalités de l'application Pedagogical-Spreadsheet.",
                ],
                ["Projet personnel réalisé à 2 et représente pour l'instant environ 100h de travail"],
                ["Développé en Java et utilise la bibliothèque JavaFX"]
            ],
            // ENGLISH
            [
                [
                    "[Project not finish yet] Pedagogical-Spreadsheet is an application of type ",
                    "spreadsheet",
                    " managing spreadsheets ",
                    "for learning scientific tools in an educational way",
                    " (among others). The application brings together all the primary and useful essential functions for learning to use a spreadsheet. It is possible to perfom many calculations and operations, to draw diagrams and play games to discover all the functionalities of the Pedagogical-Spreadsheet app."

                ],
                ["Personal project made at 2 and represents for the moment about 100 hours of work"],
                ["Developed in Java and uses the JavaFX library"]
            ]
        ],
        activeAllLinks: true,
        links: [
            [true, 'https://github.com/flandrecorentin/Pedagogical-Spreadsheet', 'fa-brands fa-github fa-2x'],
            [false, 'https://flandrecorentin.github.com/Pedagogical-Spreadsheet', 'fa-solid fa-link fa-2xl']

        ],
        imagesPaths: [
            'assets/IT-projects/Pedagogical-Spreadsheet/test1.png',
            'assets/IT-projects/Pedagogical-Spreadsheet/test2.png'
        ]
    }

    deliverAppInfos: {
        title: string[],
        description: string[][][], // manage bold|important text alterning between not bold and bold
        activeAllLinks: boolean,  // yes|no and logo
        imagesPaths: string  [],
        links?: [boolean, string, string][],
        styleDisplay?: string
    } = {
        title: ["Deliverapp", "Deliverapp"],
        description: [
            [
                // FRENCH
                [
                    "Deliverapp est une application ",
                    "calculant les meilleures tournées de livraisons de colis",
                    " à Lyon à vélo.  Cela prend en compte l'adresse et le créneau de livraison et les livreurs. Deliverapp propose différentes fonctionnalités : ajout / modification / suppression d'une livraison, calcul de tournées, impression de la feuille de route (chemin et horaires d'une tournée), sauvegarde / chargement des listes de livraisons, ajout / suppresion rapide d'une livraison après calcul, etc."
                ],
                [
                    "Projet universitaire en hexanôme de travail représentant 72h de travail par personne (moitié en cours/ moitié en dehors). Projet dans le cadre du cours ",
                    "'Développement Agile'"
                    , " en 4° année"
                ],
                ["Développé en Java et utilise la bibliothèque JavaFX (Gluon Maps)"],
                ["Les cartes (fichier xml spécifiques) sont trouvables avec le lien GitHub (Maps-Exemples)"]
            ],
            // ENGLISH
            [
                [
                    "Deliverapp is an application ",
                    "calculating the best packages delivery routes",
                    " in Lyon by bike. It takes in consideration the address, the delivery slot and the delivery drivers. Deliverapp offers a range of functions: add/modify/delete a delivery, calculate routes, print the roadmap (route and times of a round), save/load delivery lists, quickly add/delete delivery after calculation, etc."

                ],
                [
                    "University project in hexanomy of work representing 72 hours of work per person (half in progress / half outside). Project in the course ",
                    "'Agile Development'",
                    " in 4th year"
                ],
                ["Developed in Java and uses the JavaFX library (Gluon Maps)"],
                ["Maps (adapted xml file) are available on my GitHub (Maps-Exemples)"]
            ]
        ],
        activeAllLinks: true,
        links: [
            [true, "https://github.com/flandrecorentin/Deliverapp/raw/main/Deliverapp_H4124_JDK19.jar", "fa-solid fa-download fa-2xl"], //todo download deliverapp
            [true, 'https://github.com/flandrecorentin/Deliverapp', 'fa-brands fa-github fa-2x']
        ],
        imagesPaths: [
            'assets/IT-projects/Deliverapp/tournees-calculees.jpg', 'assets/IT-projects/Deliverapp/ajout-livraison.jpg', 'assets/IT-projects/Deliverapp/feuille-de-route.png'
        ]
    }

    // Portfolio-Flandre-Corentin
    portfolioInfos: {
        title: string[],
        description: string[][][], // manage bold|important text alterning between not bold and bold
        activeAllLinks: boolean,  // yes|no and logo
        imagesPaths: string  [],
        links?: [boolean, string, string][],
        styleDisplay?: string
    } = {
        title: ["Portfolio-Flandre-Corentin", "Portfolio-Flandre-Corentin"],
        description: [
            [
                // FRENCH
                [
                    "Comme vous l'aurez compris ce projet est le site-web sur lequel vous vous trouvez qui est mon ",
                    "portfolio",
                    " perso afin d'en découvrir davantage sur moi: mon ",
                    "cursus",
                    " scolaire et professionnel, mes différents ",
                    "projets informatiques",
                    " (personnels, universitaires et professionels) et ainsi que mes ",
                    "hobbies."
                ],
                [
                    "Projet représentant environ 70h de travail"
                ],
                [
                    "Portfolio réalisé à l'aide du framework Angular (15.0.4). J'ai l'objectif d'avoir un nom de domaine à l'avenir."
                ]
            ],
            // ENGLISH
            [
                [
                    "As you can see, this project is the website you're visiting, my portfolio, where you can find out more about me: my educational and professional ",
                    "background",
                    " my various ",
                    "IT projects",
                    " (personal, academic and professional) and my ",
                    "hobbies",
                    "."
                ],
                [
                    "This project represents about 70 hours of work"
                ],
                [
                    "Portfolio developed using the Angular framework (15.0.4). I hope to have a specific domain name in the future to deploy it."
                ]
            ]
        ],
        activeAllLinks: true,
        links: [
            [true, 'about', 'fa-regular fa-address-card fa-2x']
        ],
        imagesPaths: [
            'assets/IT-projects/Portfolio-Flandre-Corentin/home.jpg',
            'assets/IT-projects/Portfolio-Flandre-Corentin/hobbies.jpg'
        ]
    }

    // Aperit'IF
    aperitIFInfos: {
        title: string[],
        description: string[][][], // manage bold|important text alterning between not bold and bold
        activeAllLinks: boolean,  // yes|no and logo
        imagesPaths: string  [],
        links?: [boolean, string, string][],
        styleDisplay?: string
    } = {
        title: ["Aperit'IF", "Aperit'IF"],
        description: [
            [
                // FRENCH
                [
                    "Aperit'IF est un ",
                    "moteur de recherche de cocktails et d'ingrédients",
                    ". Via la barre de recherche, Aperit'IF permet de chercher un cocktail à partir de son nom afin d'obtenir sa description, sa recette (avec les quantités en fonctions du nombre de personnes), une image et ses indices de services."
                ],
                [
                    "Projet universitaire en hexanôme de travail représentant 24h de travail personnel (moitié cours/moitié en dehors). Réalisé dans le cadre du cours de '",
                    "Web Sémantique 3.0",
                    "'."
                ],
                [
                    "Aperit'IF a été dévéloppé avec le framework React et tire ses données de DBpedia (requête SPARQL)"
                ]
            ],
            // ENGLISH
            [
                [
                    "Aperit'IF is a ",
                    "cocktail and ingredients search engine",
                    ". Using the search bar, Aperit'IF lets you search for a cocktail by name to obtain its description, recipe (with quantities according to the number of people), image and serving hints"
                ],
                [
                    "University project in work hexanome representing 24h of personal work (half class/half personal). Project realised for the course '",
                    "Semantic Web 3.0",
                    "' course"
                ],
                [
                    "Aperit'IF was developed with the React framework and pull its data from DBpedia (SPARQL query)."
                ]
            ]
        ],
        activeAllLinks: true,
        links: [
            [true, "https://alexisreis.github.io/AperitIF/", "fa-solid fa-link fa-2xl"],
            [true, "https://github.com/alexisreis/AperitIF", "fa-brands fa-github fa-2x"]
        ],
        imagesPaths:  [
            "assets/IT-projects/Aperit'IF/aperitif.jpg",
            "assets/IT-projects/Aperit'IF/research.jpg",
            "assets/IT-projects/Aperit'IF/mojito.jpg",
            "assets/IT-projects/Aperit'IF/rum.jpg"
        ]
    }

    // miniged
    minigedInfos: {
        title: string[],
        description: string[][][], // manage bold|important text alterning between not bold and bold
        activeAllLinks: boolean,  // yes|no and logo
        imagesPaths: string  [],
        links?: [boolean, string, string][],
        styleDisplay?: string
    } = {
        title: ["miniged", "miniDMS"],
        description: [
            [
                // FRENCH
                [
                    "miniged est une ",
                    "application web de type GED",
                    " (Gestionnaire Electronique de Documents) simplifiée. Il permet de gérer des ",
                    "documents",
                    " de certains types contenant des ",
                    "schémas de métadonnées",
                    " spécifiques et tout cela dans le ",
                    "cloud",
                    " ! miniged propose notamment un plan de classement de documents virtuel intelligent. "
                ],
                [
                    "Le projet est orchestré et déployé via ",
                    "Docker et Docker-composer",
                    ". miniged se compose d'un ",
                    "backend",
                    " Java utilisant le framework Spring (notamment pour l'API REST), d'un ",
                    "frontend ",
                    "réalisé avec le framework Vue.Js 3, d'une base de données non relationnelle MongoDB et d'un service Minio pour stocker les pièces jointes dans le cloud."
                ],
                [
                    "J'ai réalisé miniged seul dans le cadre d'un ",
                    "POC",
                    " (en: Proof Of Concept) durant un stage d'été de 2 mois dans lequel j'étais chargé de définir mes propres spécifications."
                ]
            ],
            // ENGLISH
            [
                [
                    "miniDMS is a ",
                    "DMS type web application",
                    " (Document Management System). It lets you manage your ",
                    "documents",
                    " of certain types containing ",
                    "schemas composed of metadatas",
                    " and all that in the ",
                    "cloud",
                    " ! miniDMS offers an intelligent virtual document classification scheme"
                ],
                [
                    "The project is orchestrated and deployed by ",
                    "Docker and Docker-compose",
                    " .miniDMS consists of a Java ",
                    "backend",
                    " using the Spring framework (including for the REST API), a ",
                    "frontend",
                    " made with the Vue.Js 3 framework, a non-relational MongoDB database and a Minio service to store attachments in the cloud"
                ],
                [
                    "I developed miniDMS on my own as part of a ",
                    "POC",
                    " (Proof Of Concept) during a 2-month summer internship, in wich I was in charge of defining my own specifications."
                ]
            ]
        ],
        activeAllLinks: true,
        links: [
            [true, "https://github.com/flandrecorentin/miniged", "fa-brands fa-github fa-2x"]
        ],
        imagesPaths: [
            "assets/IT-projects/miniged/schema.jpg",

        ]
    }


    messagingCInfos: {
        title: string[],
        description: string[][][], // manage bold|important text alterning between not bold and bold
        activeAllLinks: boolean,  // yes|no and logo
        imagesPaths: string  [],
        links?: [boolean, string, string][],
        styleDisplay?: string
    } = {
        title: ["C-Messagerie", "C-Messaging"],
        description: [
            [
                // FRENCH
                [
                    "C-Messagerie est une ",
                    "micro application type messagerie",
                    " développée en ",
                    "C",
                    " uniquement. C-Messagerie utilise une ",
                    "architecture centralisée",
                    " avec un unique ",
                    "serveur",
                    " et de multiples ",
                    "clients",
                    ". L'application permet d'échanger des messages en direct entre différentes sessions de clients. Les fonctionnalités principales sont: connexion via login/mdp, échange de message en direct entre utilisateurs, historique de message, création de groupe d'utilisateurs, traitement de l'horaire des messages."
                ],
                [
                    "C-Messagerie, projet universitaire, a été réalisé en 12h en binôme de travail dans le cadre du cours '",
                    "Programmation C",
                    "'."
                ]
            ],
            // ENGLISH
            [
                [
                    "C-Messagerie is a ",
                    "micro messaging application",
                    "developed in ",
                    "C",
                    ". C-Messagerie uses a ",
                    "centralized architecture",
                    " with a single ",
                    "server",
                    " and multiple ",
                    "clients",
                    ". The application lets you exchange live messages between different client sessions. The main features are: login/password connection, live message exchange between users, message history, user group creation, message scheduling."
                ],
                [
                    "C-Messagerie, a university project, was completed in 12 hours in pairs as part of the '" ,
                    "C programming",
                    "' course."
                ]
            ]
        ],
        activeAllLinks: true,
        links: [
            [true, "https://github.com/flandrecorentin/Messagerie4IF_G2_S1", "fa-brands fa-github fa-2x"]
        ],
        imagesPaths: [
            'assets/IT-projects/C-Messagerie/img1.png',
            'assets/IT-projects/C-Messagerie/img2.png',
            'assets/IT-projects/C-Messagerie/img3.png'
        ],
        styleDisplay: "small-project"
    }


    miniGameJavaInfos: {
        title: string[],
        description: string[][][], // manage bold|important text alterning between not bold and bold
        activeAllLinks: boolean,  // yes|no and logo
        imagesPaths: string  [],
        links?: [boolean, string, string][],
        styleDisplay?: string
    } = {
        title: ["Mini-Jeu-Java", "Mini-Game-Java"],
        description: [
            [
                // FRENCH
                [
                    "Mini-jeu-Java est une application lourde de ",
                    "3 minis-jeux",
                    " que j'ai développée lorsque j'ai commencé l'informatique. Cette plateforme comporte un ",
                    "démineur",
                    ", un ",
                    "casse-brique",
                    " et un jeu '",
                    "snake",
                    "'."
                ],
                [
                    "Application codée en Java et utilise la bibliothèque Swing pour l'interface (qui laisse certes à désirer ahaha). Cette application (l'une de mes premières) m'a fait découvrir les notions de POO, héritage, interface ect. Mini-jeu-Java date de 2020."
                ],
                [
                    ""
                ]
            ],
            // ENGLISH
            [
                [
                    "Mini-Game-Java is a application working on thick client of",
                    "3 mini-games",
                    "that I devloped when I started computing. This platform features a ",
                    "minesweeper",
                    ", a ",
                    "brick-breaker",
                    " and a ",
                    "snake",
                    "."
                ],
                [
                    "Application coded in Java and using the Swing library for the interface. This application (one of my first) introduced me the notions of OOP, inheritance, interface and so on. Mini-game-Java dates from 2020."
                ]
            ]
        ],
        activeAllLinks: true,
        links: [
            [true, "https://github.com/flandrecorentin/Mini-jeu_JAVA/raw/download/Mini_jeu_JAVA.zip", "fa-solid fa-download fa-2xl"], //todo download minigamejava
            [true, "'https://github.com/flandrecorentin/Mini-jeu_JAVA'", "fa-brands fa-github fa-2x"]
        ],
        imagesPaths: [
            'assets/IT-projects/Mini-jeu-JAVA/demineur1.png',
            'assets/IT-projects/Mini-jeu-JAVA/demineur2.png',
            'assets/IT-projects/Mini-jeu-JAVA/casse-briques.png',
            'assets/IT-projects/Mini-jeu-JAVA/snake.jpg',
            'assets/IT-projects/Mini-jeu-JAVA/home.jpg'
        ],
        styleDisplay: ""
    }


    journeyCPPInfos: {
        title: string[],
        description: string[][][], // manage bold|important text alterning between not bold and bold
        activeAllLinks: boolean,  // yes|no and logo
        imagesPaths: string  [],
        links?: [boolean, string, string][],
        styleDisplay?: string
    } = {
        title: ["Trajet C++", "Journey C++"],
        description: [
            [
                // FRENCH
                [
                    "Trajet C++ est une application sur terminal codée en C++ uniquement. L'application permet de ",
                    "gérer un catalogue de divers trajets",
                    " et comporte de multiples fonctionnalités: impression du catalogue, ajout de trajet simple, ajout de trajet complexe (combinaison de trajets simples et/ou complexes), recherche, chargement d'un catalogue, sauvegarde d'un catalogue. "
                ],
                [
                    "Projet universitaire réalisé en binôme qui représente 16h de travail dans le cadre du cours de '",
                    "Programmation C++ avancée",
                    "'."
                ]
            ],
            // ENGLISH
            [
                [
                    "Journey C++ is a terminal application coded in C++ only. Tha application allows you to ",
                    "manage a catalog of various journeys/routes",
                    " and includes multiple functionalities: printing the catalog, adding a simple route, adding a complex route (combination of simple and/or complex routes), searching, loading or saving a catalog"
                ],
                [
                    "University project carried out in pairs, representing 16 hours of work in the course '",
                    "Advanced C++ Programming",
                    "'."
                ]
            ]
        ],
        activeAllLinks: true,
        links: [
            [true, "https://github.com/flandrecorentin/TrajetC", "fa-brands fa-github fa-2x"]
        ],
        imagesPaths: [
            'assets/IT-projects/TrajetC++/test1.png',
            'assets/IT-projects/TrajetC++/test2.png',
            'assets/IT-projects/TrajetC++/test3.png',
            'assets/IT-projects/TrajetC++/test4.png',
            'assets/IT-projects/TrajetC++/test5.png',
            'assets/IT-projects/TrajetC++/test6.png',
            'assets/IT-projects/TrajetC++/test7.png'
        ],
        styleDisplay: "small-project"
    }


    // eau-the-l-eau
    othelloInfos: {
        title: string[],
        description: string[][][], // manage bold|important text alterning between not bold and bold
        activeAllLinks: boolean,  // yes|no and logo
        imagesPaths: string  [],
        links?: [boolean, string, string][],
        styleDisplay?: string
    } = {
        title: ["eau-the-l'eau", "Othello-Game"],
        description: [
            [
                // FRENCH
                [
                    "Derrière ce jeu de mot (plus que médiocre je vous l'accorde), se cache le jeu de l'",
                    "othello",
                    " au format terminal."
                ],
                [
                    "Ce projet universitaire a pour but de s'initier à l'IA en analysant la performance des algorithmes qui existent pour gagner à l'othello et à la ",
                    "création d'heuristiques",
                    " pour améliorer/perfectionner l'IA. Nous sommes arrivés à une IA capable de jouer en temps raisonnable (10s) le meilleur coup en profondeur 4. "
                ],
                [
                    "L'eau-the-l-eau a été réalisé en hexanome durant 12h tout en Prolog mais le code est grandement tiré de l'utilisateur Github pchampio: nous avons principalement fait de l'analyse de performance des algorithmes/heuristiques"
                ]
            ],
            // ENGLISH
            [
                [
                    "The project is the ",
                    "othello",
                    " game in terminal format"
                ],
                [
                    "The aim of this university project is to learn about AI by analyzing the performance of existing algorithms for winning at othello and ",
                    "creating heuristics",
                    " to improve the AI. We arrived at an AI capable of playing the best move in depth 4 in a reasonable time (10sec)."
                ],
                [
                    "The Othello-Game was realized in hexanome during 12hours in Prolog but the code is largely inspired from the Github user pchampio: we mainly did performance analysis of the algorithms/heuristics."
                ]
            ]
        ],
        activeAllLinks: true,
        links: [
            [true, "https://github.com/flandrecorentin/eau-the-l-eau", "fa-brands fa-github fa-2x"]
        ],
        imagesPaths: [
            'assets/IT-projects/eau-the-l-eau/game1.png',
            'assets/IT-projects/eau-the-l-eau/game2.png',
            'assets/IT-projects/eau-the-l-eau/choice-player.png'
        ],
        styleDisplay: "small-project"
    }

    oldPortfolioInfos: {
        title: string[],
        description: string[][][], // manage bold|important text alterning between not bold and bold
        activeAllLinks: boolean,  // yes|no and logo
        imagesPaths: string  [],
        links?: [boolean, string, string][],
        styleDisplay?: string
    } = {
        title: ["Ancien Portfolio", "Old Portfolio"],
        description: [
            [
                // FRENCH
                [
                    "Comme son nom l'indique, il s'agit de mon premier Portfolio et même de mon premier site web que j'ai déployé !"
                ],
                [
                    "Pour ce projet j'ai réalisé mes maquettes sur l'outil Figma. Au niveau technologie c'etait l'occasion d'apprendre le triplet ",
                    "HTML/CSS/JavaScript",
                    ". Attention ! Mon ancien portfolio n'est pas maintenu à jour"
                ]
            ],
            // ENGLISH
            [
                [
                    "As the name suggests, this is my first Portfolio and even my first website that I'ved deployed !"
                ],
                [
                    "For this project, I created my models using the Figma tool. In terms of technology, it was an opportunity to learn the usage of the ",
                    "HTML/CSS/Javascript",
                    " triplet. My old portfolio is not maintained/updated"
                ]
            ]
        ],
        activeAllLinks: true,
        links: [
            [true, "https://flandrecorentin.github.io/Ancien-Portfolio-Flandre-Corentin/", "fa-solid fa-link fa-2xl"],
            [true, "https://github.com/flandrecorentin/Ancien-Portfolio-Flandre-Corentin", "fa-brands fa-github fa-2x"],
        ],
        imagesPaths: [
            'assets/IT-projects/Ancien-Portfolio/home.jpg',
            'assets/IT-projects/Ancien-Portfolio/cursus.jpg',
            'assets/IT-projects/Ancien-Portfolio/projects.jpg',
            'assets/IT-projects/Ancien-Portfolio/hobbies.jpg',
            'assets/IT-projects/Ancien-Portfolio/diaporama-sport.jpg',
            'assets/IT-projects/Ancien-Portfolio/diaporama-art.jpg'
        ],

        styleDisplay: "small-project"
    }



    familyWallInfos: {
        title: string[],
        description: string[][][], // manage bold|important text alterning between not bold and bold
        activeAllLinks: boolean,  // yes|no and logo
        imagesPaths: string  [],
        links?: [boolean, string, string][],
        styleDisplay?: string
    } = {
        title: ["FamilyWall", "FamilyWall"],
        description: [
            [
                // FRENCH
                [
                    "[Projet en cours de développement] FamilyWall est une application web et mobile de ",
                    "messagerie en ligne",
                    " maximisant l'expérience utilisateur et la sécurité à fort enjeux environnementaux et sociétaux."
                ],
                [
                    "FamilyWall ",
                    "maximise la sécurité",
                    ": chiffrement de bout en bout, respectuexu de la privacité, fonctionnalités sans dangers/biais (sans suggestion d'amis etc.)"
                ],
                [
                    "FamilyWall est ",
                    "respectueux de l'environnement",
                    ": suppression de l'historique au bout d'un certain temps, gestion de qualité des fichiers médias etc. Le tout restant paramètrable selon les besoins de l'utilisateur"
                ],
                [
                    "L'objectif de FamilyWall est de ",
                    "pouvoir communiquer à distance de manière simple et raisonnée :)"
                ]
            ],
            // ENGLISH
            [
                [
                    "[Project under development] FamilyWall is a web and mobile application for ",
                    "online messaging",
                    "maximizing user experience and security with high environmental and societal aspects"
                ],
                [
                    "FamilyWall, ",
                    "maximizes security",
                    ": E2E (end-to-end) encryption, privacy, safe/withou biased features (no suggestion of friends etc.) good for familly etc."
                ],
                [
                    "FamilyWall is ",
                    "environmentally friendly",
                    ": history deletion after a certain time, quality management of media files etc. All of that can be configured according to the user's needs"
                ],
                [
                    "The objective of FamilyWall is ",
                    "to be able to communicate remotely in a simple and sensible way :)"
                ]
            ]
        ],
        activeAllLinks: true,
        links: [
            [false, "https://familywall/", "fa-solid fa-link fa-2xl"],
            [false, "https://github.com/flandrecorentin/familywall", "fa-brands fa-github fa-2x"]
        ],
        imagesPaths: [
            // todo : use updated images
            'assets/IT-projects/FamilyWall/home.png',
            'assets/IT-projects/FamilyWall/register.png'
        ],
        styleDisplay: ""
    }


    machineLearningInfos: {
        title: string[],
        description: string[][][], // manage bold|important text alterning between not bold and bold
        activeAllLinks: boolean,  // yes|no and logo
        imagesPaths: string  [],
        links?: [boolean, string, string][],
        styleDisplay?: string
    } = {
        title: ["TP Machine Learning", "TP Machine Learning"],
        description: [
            [
                // FRENCH
                [
                    "Le TP (Travaux Pratique) de Machine Learning est un projet universitaire qui consistait à partir d'un ",
                    "jeu de données, d'estimer/prédire prix de vente d'une maison",
                    " vers Seattle. Il parcourt différentes notions de ML: ",
                    "classification",
                    ", arbre de décision, compromis ",
                    "biais/variance",
                    ", ",
                    "régression",
                    "(linéaire, ridge, ridge à noyau), apprentissage bayésien, ",
                    "approximation de Nyström",
                    ", Random Forest, modèles de Markov, inférence variationnelle etc. Ce TP de Machine Learning en équipe de 3 représente environ 16h de travail par personne."
                ],
                [
                    "Projet réalisé avec le langage Python (dont bibliothèque ", "Scikit-Learn",
                    ") et la plateform Jupyter Notebook "
                ]
            ],
            // ENGLISH
            [
                [
                    "The Machine Learning TP (Travaux Pratique) is a university project that involves using a ",
                    "dataset to best estimate/predict the sale price of a house",
                    " in Seattle. It covers various ML concepts: ",
                    "classification",
                    ", decision tree, ",
                    "bias/variance",
                    " trade-off, ",
                    "regression",
                    " (linear, ridge, kernel ridge), ",
                    "Nyström approximation",
                    " Bayesian learning, Random Forest, Marko models, variational inference, etc. This Machine Learning practical course in teams of 3 represents 16 hours of work per person."
                ],
                [
                    "Project realized with the Python language (including library ", "Scikit-Learn",
                    ") and the Jupyter Notebook platform"
                ]
            ]
        ],
        activeAllLinks: true,
        links: [
            [true, "https://github.com/flandrecorentin/Machine-Learning-Project", "fa-brands fa-github fa-2x"]
        ],
        imagesPaths: [
            'assets/IT-projects/TP-Machine-Learning/ML-random-forest-diagram.jpg',
            'assets/IT-projects/TP-Machine-Learning/ML-random-forest-result.png',
        ],
        styleDisplay: ""
    }



    compilerInfos: {
        title: string[],
        description: string[][][], // manage bold|important text alterning between not bold and bold
        activeAllLinks: boolean,  // yes|no and logo
        imagesPaths: string  [],
        links?: [boolean, string, string][],
        styleDisplay?: string
    } = {
        title: ["Compilateur C", "C Compiler"],
        description: [
            [
                // FRENCH
                [
                    "Le projet est un ",
                    "compilateur d'un sous-ensemble du langage C",
                    ". Le compilateur peut à partir d'un fichier correctement écrit en C, reformuler le ",
                    "code assembleur",
                    " associé. Le compilateur est en mesure de donner certaines erreurs et des alertes lorsqu'elles sont détectées de la même manière que le fait GNU Compiler Collection (gcc)"
                ],
                [
                    "Projet universitaire réalisé en hexanôme d'une durée de 2 semaines dans le cadre du cours 'Projet Compilateur'. Le projet a été piloté en utilisant par la méthode dite '",
                    "Test-Driven Development",
                    "'."
                ],
                [
                    "Le compilateur est écrit en ",
                    "C++",
                    " et utilise ",
                    "ANTLR 4",
                    "."
                ]
            ],
            // ENGLISH
            [
                [
                    "The project is a ",
                    "compiler of a subset of the C language",
                    ". The compiler can from a file correctly written in C generate the ",
                    "assembly code",
                    " associated. The compiler is able to give certain errors and warnings that it has detected in the same way as the GNU Compiler Collection (gcc) does."
                ],
                [
                    "University project carried out in hexanome over a period of 2 weeks as part of the 'Compiler Project' course. The project was piloted using the '",
                    "Test-Driven Development",
                    " method."
                ],
                [
                    "The compiler is written in ",
                    "C++",
                    " and uses ",
                    "ANTLR 4",
                    "."
                ]
            ]
        ],
        activeAllLinks: true,
        links: [
            [true, "https://github.com/flandrecorentin/Compilateur-ProjetCompilateur", "fa-brands fa-github fa-2x"]
        ],
        imagesPaths: [
            // todo: add pictures of project (including schema) + add sujet in repository github
            ""
        ],
        styleDisplay: ""
    }



    mobilitIFInfos: {
        title: string[],
        description: string[][][], // manage bold|important text alterning between not bold and bold
        activeAllLinks: boolean,  // yes|no and logo
        imagesPaths: string  [],
        links?: [boolean, string, string][],
        styleDisplay?: string
    } = {
        title: ["Mobilit'IF", "Mobilit'IF"],
        description: [
            [
                // FRENCH
                [
                    "Mobilit'IF est une ",
                    "plateforme de renseignement sur les échanges universitaires",
                    " à l'INSA qui rassemble des formulaires de retours d'expériences sur les destinations, une messagerie, une FAQ dynamique gérée par des administrateurs. Mobilit'IF intègre aussi une dimension ",
                    "R&D",
                    " avec l'intégration d'un chatbot capable de répondre aux questions utilisateurs sur ce sujet (non disponible à cause d'effets de bords probables) et un outil de '",
                    "scrapping",
                    "' pour centraliser les informations diverses existantes sur ces échanges."
                ],
                [
                    "L'objectif du projet était de ",
                    "répondre à un besoin",
                    " en informatique au sein de l'INSA"
                ],
                [
                    "Ce projet universitaire réalisé en hexanôme est un projet techniquement complet rassemblant un backend (framework Spring), un frontend (framework Angular), une base de données MongoDB et la partie scrapping et chatbot est réalisée en Python"
                ]
            ],
            // ENGLISH
            [
                [
                    "Mobilit'IF is a ",
                    "information platform for university exchanges",
                    " at INSA, which includes feedback forms on destinations, a messaging system, and a dynamic FAQ managed by administrators. Mobilit'IF also includes an ",
                    "R&D" ,
                    " dimension with the integration of a chatbot capable of answering user questions on the theme (not available due to probable side effects) and a '",
                    "scrapping" ,
                    "' tool to centralize the various existing information on these exchanges."
                ],
                [
                    "The objective of the project was to ",
                    "answer to a specific need ",
                    "in IT at INSA"
                ],
                [
                    "This university project realized in hexanome is a technically complete project integrating a backend (Spring framework), a frontend (Angular framework), a MongoDB database and the scrapping and chatbot part is realized in Python."
                ]
            ]
        ],
        activeAllLinks: true,
        links: [
            [false, "https://mobilitIF/", "fa-solid fa-link fa-2xl"],
            [true, "https://github.com/flandrecorentin/PLD-SMART", "fa-brands fa-github fa-2x"]

        ],
        imagesPaths: [
            // todo : add pictures and update README
            "assets/IT-projects/Mobilit'IF/connexion.jpg",
            "assets/IT-projects/Mobilit'IF/home.jpg",
            "assets/IT-projects/Mobilit'IF/detail.jpg"
        ],
        styleDisplay: ""
    }


    // first project is 1
    mapITProjects = [
        this.stravaSeries,
        this.pedagogicalSpreadsheetInfos,
        this.deliverAppInfos,
        this.portfolioInfos,
        this.aperitIFInfos,
        this.mobilitIFInfos,
        this.minigedInfos,
        this.messagingCInfos,
        this.miniGameJavaInfos,
        this.journeyCPPInfos,
        this.othelloInfos,
        this.oldPortfolioInfos,
        this.familyWallInfos,
        this.compilerInfos,
        this.machineLearningInfos,
        // this.Infos,
    ]
    // last project is x

}
