import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomePageComponent {
  textProjects = "Projets Informatiques";
  textCurriculum = "Cursus";
  textHobbies1 = "Sport";
  textHobbies2 = "Art";
  styleClassLeft = "route-label route-label-left";
  styleClassRight = "route-label route-label-right";
  styleClassDivLeft = "route-label-div-left";
  styleClassDivRight = "route-label-div-right";
  curriculumInfos = ['Parcours universitaire et professionel', 'Découvez mon parcours universitaire et mon début dans le monde professionel', 'curriculum'];
  projectsInfos = ['Projets informatiques', 'Découvrez tout mes projets personnels, universitaires et profesionnels', 'projects'];
  sportInfos = ['Ma pratique de sport', 'Apprenez en plus sur tout mes hobbies et tout mes voyages en itinérance :)', 'sport'];
  artInfos = ['Mes oeuvres artistiques', 'Visionnez quelqu unes de mes oeuvres physiques ou numériques', 'art'];
}


