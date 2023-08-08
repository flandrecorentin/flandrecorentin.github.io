import {Component} from '@angular/core';
import {GlobalVariable} from "../../global-variable";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  textButtonCurriculum = ['Cursus','Curriculum'];
  linkButtonCurriculum = '#cursus';
  textButtonProjects = ['Projets Informatiques', 'IT/Computer Projects'];
  linkButtonProjects = '#projects';
  textButtonHobbies = 'Hobbies';
  linkButtonHobbies = '#hobbies';
  textButtonContact = 'Contact'
  // others buttons to display outside the homepage

  constructor(public param: GlobalVariable) {
  }

  languageEnglish(){
    console.log("hello")
    this.param.locale = 1
    sessionStorage.setItem('locale',String(1));
  }
  languageFrench(){
    console.log("salut")
    this.param.locale = 0
    sessionStorage.setItem('locale',String(0));
  }
  styleClassHeader = 'styleHeader';
}
