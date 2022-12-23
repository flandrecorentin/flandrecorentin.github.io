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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
