import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CurriculumComponent} from  './curriculum/curriculum.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component'
import {HomePageComponent} from "./homepage/homepage.component";
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ButtonComponent } from './components/button/button.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SectionComponent } from './components/section/section.component';
import { SectionrouteComponent } from './components/sectionroute/sectionroute.component';
import { OnecontactComponent } from './components/onecontact/onecontact.component';
import { ResponseCurriculumComponent } from './components/response-curriculum/response-curriculum.component';
import { SvgComponent } from './svg/svg.component';
import { SportSectionComponent } from './components/sport-section/sport-section.component';
import { ArtSectionComponent } from './components/art-section/art-section.component';
import { ArtSportChoiceComponent } from './components/art-sport-choice/art-sport-choice.component';
import { HobbiesSportComponent } from './hobbies-sport/hobbies-sport.component';
import { HobbiesArtComponent } from './hobbies-art/hobbies-art.component';
import { CounterHobbiesComponent } from './components/counter-hobbies/counter-hobbies.component';
import { ResultHobbiesComponent } from './components/result-hobbies/result-hobbies.component';
import { OneITprojectComponent } from './components/one-ITproject/one-ITproject.component';
import {GlobalVariable} from "./global-variable";


@NgModule({
  declarations: [
    AppComponent,
    CurriculumComponent,
    AboutComponent,
    PageNotFoundComponent,
    HomePageComponent,
    HobbiesComponent,
    ProjectsComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    ButtonComponent,
    PresentationComponent,
    SectionComponent,
    SectionrouteComponent,
    OnecontactComponent,
    ResponseCurriculumComponent,
    SvgComponent,
    SportSectionComponent,
    ArtSectionComponent,
    ArtSportChoiceComponent,
    HobbiesSportComponent,
    HobbiesArtComponent,
    CounterHobbiesComponent,
    ResultHobbiesComponent,
    OneITprojectComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
  providers: [GlobalVariable],
  bootstrap: [AppComponent]
})
export class AppModule {

}
