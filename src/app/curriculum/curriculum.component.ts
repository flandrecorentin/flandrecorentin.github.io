 import {Component} from '@angular/core';
 import {GlobalVariable} from "../global-variable";

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
})
export class CurriculumComponent{
  constructor(public param: GlobalVariable) {
  }
  textTitleCurriculum = ["Cursus", "Curriculum"]
  textDownloadCV = [['Télécharger mon CV (français)','Download my french CV'],['Télécharger mon CV (anglais)','Download my english CV']]
  textButton = [
    ['Collège/Lycée', 'INSA Lyon', 'KTH', 'Ingénieur :)'],
    ['Middle/High school', 'INSA Lyon', 'KTH ','Engineer :)']
  ];
  styleCurriculum1 = 'styleCurriculum';
  styleCurriculum2 = 'styleCurriculumActive';
  styleCurriculum3 = 'styleCurriculum';
  styleCurriculum4 = 'styleCurriculum';

  textHighschool = [
    'Collège dans les Vosges. Classe sportive tennis depuis la sixième. Brevet mention très bien. Lycée Georges Baumont de 2016 à 2018: bac scientifique sciences de l\'ingénieur  avec spécialité mathématiques (Bac S-SI spé maths). Début de mes premiers projets en informatique. Obtention du bac mention très bien avec une moyenne de 17.55/20.',
    'Middle school in the Vosges. Tennis sports class since middle school. Brevet with high honors. Highschool Georges Baumont from 2016 to 2018: scientist baccalaureate in engineer sciences with maths specialization. Start of my first IT projects. Graduated of highschool with high honors with the baccalaureate on average of 17.55/20.'
  ];


  textINSA = [
    'INSA Lyon depuis 2019. Mon cursus d\'élève ingénieur (5ans) a débuté avec 2 ans de prépa-intégrée (Formation Initiale au Métier de l\'Ingénieur (FIMI)) afin d\'apprendre les bases de l\'ingénierie et des sciences. Classé 57ème sur 800 au FIMI j\'ai obtenu le département Informatique (IF). 3 ans au département IF pour couvrir les thèmes de l\'informatique tel que IA, BigData, cybersécurité, DevOps. Total de 14 mois de stage. Grand investissement dans les associations de l\'INSA !',
    'INSA Lyon since 2019. My engineering student courses (5 years) began with 2 years of integrated preparation in order to learn the basics of engineering and science. Ranked 57th out of 800 after this 2 years. After the integrated preparation, I joined the Computer Science department to cover IT topics such as IA, BigData, Cybersecurity, Machine Learning and DevOps. Total of 14 months of internship. Great investment in INSA associations.'
  ];

  textKTH = [
    "KTH (fr: Ecole Royale Polytechnique) en Suède à Stockholm. Six mois d'échange universitaire pour améliorer mon niveau d'anglais. Spécialisation dans les domaines de la Cybersécurité, du Machine Learning et des Technologies Distribuées (solutions distribuées et blockchains). Découverte de la culture suédoise et apprentissage du suédois.",
    "KTH (fr: Royal Institute of Technology) in Sweden in Stockholm. Six months of university exchange to improve my English proficiency. Specialization in the fields of Cybersecurity, Machine Learning, and Distributed Technologies (distributed solutions and blockchains). Discovering Swedish culture and learning Swedish."
  ]

  textEngineer = ['Ingénieur en devenir (diplômé en 2024) j\'ai réalisé pour l\'instant 3 stages (en data et en développement web). Je recherche un stage de fin d\'étude (PFE) qui peut déboucher sur un CDI. En perso, réalisation de différents sites webs pour des clients/entreprises. Enseigne/donne des cours d\'informatiques et de mathématiques à des classes de première et deuxième année à l\'INSA',
    "I will be engineer (graduated in 2024). I have so far completed 3 internships (in data and web development). I am looking for an end-of-study internship (6 months) wich can lead to a permanent contract. Personally, creation of various websites for clients/companies. Teaches/gives courses in computer science and especially mathematics to first and second year classes at INSA"
  ];

  highschoolInfos = [['Collège&Lycée', 'Middle/High school'], this.textHighschool, ['SVG1', 'SVG1']];
  INSAInfos = [['INSA Lyon', 'INSA Lyon'],this.textINSA , ['SVG2', 'SVG2']];
  KTHInfos = [['KTH', 'KTH'],this.textKTH , ['SVG3', 'SVG3']];
  engineerInfos = [['Ingénieur', 'Engineer'], this.textEngineer, ['SVG4', 'SVG4']];
  currentChoiceResponse = 2;



  onClick1() {
    this.currentChoiceResponse = 1;
    this.styleCurriculum1 = 'styleCurriculumActive';
    this.styleCurriculum2 = 'styleCurriculum';
    this.styleCurriculum3 = 'styleCurriculum';
    this.styleCurriculum4 = 'styleCurriculum';
  }

  onClick2() {
    this.currentChoiceResponse = 2;
    this.styleCurriculum1 = 'styleCurriculum';
    this.styleCurriculum2 = 'styleCurriculumActive';
    this.styleCurriculum3 = 'styleCurriculum';
    this.styleCurriculum4 = 'styleCurriculum';
  }
  onClick3() {
    this.currentChoiceResponse = 3;
    this.styleCurriculum1 = 'styleCurriculum';
    this.styleCurriculum2 = 'styleCurriculum';
    this.styleCurriculum3 = 'styleCurriculumActive';
    this.styleCurriculum4 = 'styleCurriculum';
  }
  onClick4() {
    this.currentChoiceResponse = 4;
    this.styleCurriculum1 = 'styleCurriculum';
    this.styleCurriculum2 = 'styleCurriculum';
    this.styleCurriculum3 = 'styleCurriculum';
    this.styleCurriculum4 = 'styleCurriculumActive';
  }
}


