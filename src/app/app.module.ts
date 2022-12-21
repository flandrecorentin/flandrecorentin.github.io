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


@NgModule({
  declarations: [
    AppComponent,
    CurriculumComponent,
    AboutComponent,
    PageNotFoundComponent,
    HomePageComponent,
    HobbiesComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
