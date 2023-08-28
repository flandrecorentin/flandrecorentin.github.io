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
                    "Pedagogical-Spreadsheet est une application de type ",
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
                    "Pedagogical-Spreadsheet is an application of type ",
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
                ["Développé en Java et utilise la bibliothèque JavaFX (Gluon Maps)"]
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
                ["Developed in Java and uses the JavaFX library (Gluon Maps)"]
            ]
        ],
        activeAllLinks: true,
        links: [
            [false, "", "fa-solid fa-download fa-2xl"], //todo download deliverapp
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
            [false, "", "fa-solid fa-download fa-2xl"], //todo download minigamejava
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
                    "answer to a specific need",
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
            ""
        ],
        styleDisplay: ""
    }


    // first project is 1
    mapITProjects = [
        this.pedagogicalSpreadsheetInfos,          // [1]
        this.deliverAppInfos,                      // [2]
        this.portfolioInfos,                       // [3]
        this.aperitIFInfos,                        // [4]
        this.minigedInfos,                         // [5]
        this.messagingCInfos,                      // [6]
        this.miniGameJavaInfos,                    // [7]
        this.journeyCPPInfos,                      // [8]
        this.othelloInfos,                         // [9]
        this.oldPortfolioInfos,                    // [10]
        this.familyWallInfos,                      // [11]
        this.machineLearningInfos,                 // [12]
        this.compilerInfos,                        // [13]
        this.mobilitIFInfos,                       // [14]
        // this.Infos,                  // [15]
    ]
    // last project is x

    isALink = [
        ['yes', 'fa-brands fa-github fa-2x'],
        ['no', 'fa-brands fa-github fa-2x'],
        ['yes', 'fa-regular fa-address-card fa-2x'],
        ['yes', 'fa-solid fa-link fa-2xl'],
        ['yes', 'fa-brands fa-docker fa-2x'],
        ['yes', 'fa-brands fa-github fa-2x'],
        ['yes', 'fa-brands fa-java fa-3x'],
        ['yes', 'fa-brands fa-github fa-2x'],
        ['yes', 'fa-brands fa-github fa-2x'],
        ['yes', 'fa-brands fa-codepen   fa-2x'],
        ['yes', 'fa-brands fa-github fa-2x'],
        ['yes', 'fa-brands fa-github fa-2x']
    ];
    imagesLinks = [
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
        ['assets/IT-projects/FamilyWall/home.png', 'assets/IT-projects/FamilyWall/register.png'],
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
    hobbies = [
        // [0] -> 1/x
        ['[1] Pedagogical-Spreadsheet',
            'Pedagogical-Spreadsheet est une application de type tableur gérant des feuilles de calcul pour l\'apprentissage des outils scientifiques dans le monde de l\'éducation (entre autre). L\'application rassemble toutes les fonctions essentielles primaires et utiles pour apprendre à manier un tableur. Il est ainsi possible de faire de nombreux calculs et opérations,  de tracer des diagrammes et des jeux permettent de découvrir toutes les fonctionnalités de Pedagogical-Spreadsheet. Il s\'agit d\'un projet personnel réalisé à 2 et représente pour l\'instant (projet non fini) environ 60h de mon temps perso. Il est codé en Java et utilise la bibliothèque JavaFX et un peu de CSS pour les interfaces.',
        ],
        // [1] -> 2/x
        ['[2] Deliverapp',
            'Deliverapp est une application qui calcule les meilleures tournées de livraisons de colis.  Cela prend en compte l\'adresse et le créneau de livraison et les livreurs. Deliverapp proposent différentes fonctionnalités: ajout/modification/suppression d\'une livraison, calcul de tournées, impression de la feuille de route (chemin et horaires d\'une tournée), sauvegarde/chargement des listes de livraisons, ajout/suppresion rapide d\'une livraison après calcul, etc. Il s\'agit d\'un projet universitaire réalisé en hexanôme et représente de 72h de travail par personne (moitié en séance et moitié en dehors). Deliverapp est codé en Java 19.0.1 et utilise la bibliothèque JavaFX pour les interfaces. L\'organisation du projet a utilisé la méthodologie Agile.',
        ],
        // [2] -> 3/x
        ['[3] Portfolio-Flandre-Corentin',
            'Comme vous l\'aurez compris ce projet est le site-web sur lequel vous vous trouvez qui est mon portfolio perso afin d\'en découvrir davantage sur moi: mon cursus scolaire et professionnel, mes différents projets informatiques (personnels, universitaire et professionels) et ainsi que mes hobbies. C\'est un projet personnel qui représente environ 60h de travail en prenant en compte l\'apprentissage des technologies. Le site a été dévéloppé à l\'aide du framework Angular 15.0.4. Il sera normalement publié dés que j\'aurais mon propre nom de domaine et de quoi faire tourner le serveur web.',
        ],
        // [3] -> 4/x
        ['[4] Aperit\'IF',
            'Aperit\'IF est un moteur de recherche de cocktail et d\'ingrédients. Via la barre de recherche, Aperit\'IF permet de chercher un cocktail à partir de son nom afin d\'obtenir sa description, sa recette (avec les quantités en fonctions du nombre de personnes), une image et ses indices de services. Il s\'agit d\'un projet universitaire réalisé en hexanôme dans le but de découvrir le web sémantique. Cela représente environ 24h de travail par personne (moitié séance, moitié perso). Aperi\'IF est un site web développé avec le framework React et tire ses données de Wikidata et DBpedia avec des requêtes SPARQL.',
        ],
        // [4] -> 5/x
        ['[5] miniged',
            'miniged est une application web de type GED (Gestionnaire Electronique de Documents) simplifiée. Il permet de gérer des documents de certains types contenant schémas de métadonnées de spécifiques dans le cloud. miniged propose notamment un plan de classement de documents virtuel intelligent. Le projet est orchestré et déployé par Docker et Docker-composer. miniged est conmposé d\'un backend Java utilisant le framework Spring et l\'API REST, d\'un frontend réalisé avec le framework Vue.Js 3, d\'une base de données non relationnelle MongoDB et d\'un service Minio pour stocker les pièces jointes dans le cloud. Le projet miniged a été réalisé seul dans le cadre d\'un POC durant un stage de 2 mois dans lequel j\'étais notamment chargé de définir mes propres spécifications. Le code source n\'est pas disponible pour des raisons de confidentialité.',
        ],
        // [5] -> 6/x
        ['[6] C-Messagerie',
            'C-Messagerie est une micro application de messagerie développé en C uniquement dans le cadre universitaire. C-Messagerie utilise une architecture centralisée avec un serveur et n clients. L\'application permet d\'échanger des messages en directs différentes sessions. Les fonctionnalités principales sont: connexion via login/mdp, échange de message en direct entre utilisateurs, historique de message, création de groupe d\'utilisateurs, traitement de l\'horaire des messages et mise en place de la possibilité de cryptage. Le projet a été réalisé en 12h en TP en binôme avec un ami.',
        ],
        // [6] -> 7/x
        ['[7] Mini_jeu_Java',
            'Mini_jeu_Java est une plateforme de 3 minis-jeux que j\'ai développé lorsque j\'ai commencé l\'informatique. Cette plateforme comporte un démineur, un casse brique et le jeu "snake". Ce sont des jeux codés en Java et utilisent la bibliothèque Swing pour l\'interface (qui laisse à désirer certes ahah). J\'ai passé beaucoup de temps pour apprendre de nombreuses notions sur le langage Java (Programmation orientée objet, héritage, interface avec swing et API)...',
        ],
        // [7] -> 8/x
        ['[8] Trajet C++',
            'Trajet C++ est une application sur terminal codée en C++ dans le cadre d\'un projet universitaire de 3° année d\'INSA. L\'application permet de gérer un catalogue de divers trajets et comporte de nombreuses fonctionnalités: impression du catalogue, ajout de trajet simple, ajout de trajet complexe (combinaise de trajets simples ou complexes), recherche, chargement d\'un catalogue, sauvegarde d\'un catalogue. Trajet C++ représente 16heures de travail et a été fait avec un ami..',
        ],
        // [8] -> 9/x
        ['[9] eau-the-l-eau (TP IA)',
            'Derrière ce jeu de mot (plus que médiocre je vous l\'accorde) réalisé par moi même, se cache le jeu de l\'othello. Ce projet universitaire a pour but de s\'initier à l\'IA en analysant la puissance des algorithmes qui existent pour gagner à l\'othello et à la création d\'heuristiques pour améliorer/perfectionner l\'IA. On arrive à une IA capable de jouer en temps raisonnable le meilleur coup en profondeur 4. Le projet est réalisé en hexanôme tout en Prolog mais le code est grandement tiré de l\'utilisateur GitHub pchampio, nous avons principalement fait de l\'analyse et de la modification de code. Ce projet nous a pris 12h par personne.',
        ],
        // [9] -> 10/x
        ['[10] Ancien Portfolio',
            'Comme son nom l\'indique, il s\'agit de mon premier Portfolio et même de mon premier site web que j\'ai créé. Pour ce projet j\'ai réalisé mes maquettes sur l\'outil Figma. Au niveau technologie c\'etait l\'occasion d\'apprendre HTML/CSS/JavaScript.',
        ],
        // [10] -> 11/x
        ['[11] FamilyWall',
            '[Projet en cours] FamilyWall est une application web de messagerie en ligne maximisant l\'expérience utilisateur à fort enjeu environnementaux et sociétaux. FamilyWall est très sécurisé (protocole de cryptage de bout en bout, fonctionnalités sans dangers: pas de suggestion d\'amis etc.), très respectueux de l\'environnement possible (suppression d\'historique au bout de X temps déterminé par l\'utilisateur, baisse de la qualité des fichiers médias sauf contre-indication de l\'utilisateur). L\'objectif de FamilyWall est de pouvoir communiquer à distance de manière simple et raisonnable :)',
        ],
        // [11] -> 12/x
        ['[12] TP Machine Learning',
            'Le TP (Travaux Pratique) de Machine Learning est un projet universitaire qui consiste à partir d\'un jeu de données d\'estimer/prédire au mieux le prix de vente d\'une maison. Il parcourt différentes notions de ML: classification, arbre de décision, compromis biais/variance, régression (linéaire, ridge, ridge à noyau), apprentissage bayésien, modèles de Marko, inférence variationnelle etc. Ce TP de Machine Learning en équipe de 3 représente 16h de travail par personne.',
        ]
    ];
}
