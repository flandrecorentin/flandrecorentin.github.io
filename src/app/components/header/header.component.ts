import {Component} from '@angular/core';
import {GlobalVariable} from "../../global-variable";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  textButtonCurriculum = ['Cursus','Curriculum'];
  textButtonProjects = ['Projets Informatiques', 'IT/Computer Projects'];
  textButtonHobbies = 'Hobbies';
  textButtonContact = 'Contact'
  // others buttons to display outside the homepage

  constructor(public param: GlobalVariable) {
  }
  changeLanguage(numberLanguage:number){
    this.param.changeLocale(numberLanguage)
  }
}
