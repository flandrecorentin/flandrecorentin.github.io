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
  projectsInfos = ['Projets informatiques (Projets persos, universitaires ou professionel)', 'blablablablablabla'];
  sportInfos = ['Ma pratique de sport', 'blablablablablabla'];
  artInfos = ['Cursus universitaire et professionel', 'blablablablablabla'];
}


