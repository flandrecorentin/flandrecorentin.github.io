import {Component} from '@angular/core';
import {GlobalVariable} from "../global-variable";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomePageComponent {
    constructor(public param: GlobalVariable) {
    }
  textProjects = ["Projets Informatiques", "IT/Computer Projects"];
  textCurriculum = ["Cursus", "Curriculum"];
  textHobbies1 = "Sport";
  textHobbies2 = "Art";
  styleClassLeft = "route-label route-label-left";
  styleClassRight = "route-label route-label-right";
  styleClassDivLeft = "route-label-div-left";
  styleClassDivRight = "route-label-div-right";
  curriculumInfos = [
      ['Parcours universitaire et professionel', 'Découvrez mon parcours universitaire et mon début dans le monde professionnel', 'curriculum'],
      ['Academic and professional background', 'Discover my academic career and my start in the professional world', 'curriculum']
  ];
  projectsInfos = [
      ['Projets informatiques', 'Découvrez tous mes projets personnels, universitaires et profesionnels', 'projects'],
      ['IT Projects', 'Discover all my personal projects, academic and professional projects', 'projects']
  ];
  sportInfos = [
      ['Ma pratique de sport', 'Apprenez en plus sur tous mes hobbies et tout mes voyages en itinérance :)', 'sport'],
      ['My sports practice', 'Learn more about all my hobbies and all my roaming trips :)', 'sport']
  ];
  artInfos = [
      ['Mes oeuvres artistiques', 'Visionnez quelques unes de mes oeuvres physiques ou numériques', 'art'],
      ['My artistic works', 'View some pictures of my physical or digital works', 'art']
  ];
}


