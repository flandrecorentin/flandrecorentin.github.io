import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
})
export class CurriculumComponent{
  textButton = ['Collège/Lycée', 'INSA Lyon (actuellement', 'Ingénieur... :)'];
  styleCurriculum1 = 'styleCurriculum';
  styleCurriculum2 = 'styleCurriculumActive';
  styleCurriculum3 = 'styleCurriculum';

  textHighschool = 'Collège dans les Vosges. Classe sportive tennis depuis la sixième. Brevet mention très bien. Lycée Georges Baumont de 2016 à 2018: bac scientifique sciences de l\'ingénieur  avec spécialité mathématique (Bac S-SI spé maths). Début de mes premiers projets en informatique. Obtention du bac mention très bien avec une moyenne de 17.55/20.';


  textINSA = 'INSA Lyon depuis 2019. Mon cursus d\'élève ingénieur (5ans) a débuté avec 2 ans de prépa-intégrée (Formation Initiale au Métier de l\'Ingénieur (FIMI)) afin d\'apprendre les bases de l\'ingénieurie et des sciences. Classé 57ème sur 800 au FIMI j\'ai obtenu le département Informatique (IF). 3 ans au département IF pour couvrir les thèmes de l\'informatique tel que IA, BigData, cybersécurité, DevOps. Total de 14 mois de stage. 6 mois d\'échange à Stochkolm (Suède) à l\'Institut royal de technologie (KTH). Grand investissement dans les associations de l\'INSA !' ;

  textEngineer = 'Ingénieur en devenir (diplômé en 2024) j\'ai réalisé pour l\'instant 3 stages (en data et en développement web). Je recherche un stage de fin d\'étude (PFE) qui peut déboucher sur un CDI. En perso, réalisation de différents sites webs pour des clients/entreprises. Enseigne/donne des cours d\'informatiques et de mathématiques à des classes de première et deuxième année à l\'INSA';

  highschoolInfos = ['Collège&Lycée', this.textHighschool, 'SVG1'];
  INSAInfos = ['INSA Lyon',this.textINSA , 'SVG2'];
  engineerInfos = ['Ingénieur', this.textEngineer, 'SVG3'];
  currentChoiceResponse = 2;



  onClick1() {
    this.currentChoiceResponse = 1;
    this.styleCurriculum1 = 'styleCurriculumActive';
    this.styleCurriculum2 = 'styleCurriculum';
    this.styleCurriculum3 = 'styleCurriculum';
    console.log('click1');
  }

  onClick2() {
    this.currentChoiceResponse = 2;
    this.styleCurriculum1 = 'styleCurriculum';
    this.styleCurriculum2 = 'styleCurriculumActive';
    this.styleCurriculum3 = 'styleCurriculum';
    console.log('click1');
  }
  onClick3() {
    this.currentChoiceResponse = 3;
    this.styleCurriculum1 = 'styleCurriculum';
    this.styleCurriculum2 = 'styleCurriculum';
    this.styleCurriculum3 = 'styleCurriculumActive';
    console.log('click1');
  }
}


