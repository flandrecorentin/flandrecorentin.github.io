import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CurriculumComponent} from './curriculum/curriculum.component';
import {HomePageComponent} from './homepage/homepage.component';
import {ProjectsComponent} from './projects/projects.component';
import {AboutComponent} from './about/about.component';
import {HobbiesComponent} from './hobbies/hobbies.component';
import {PageNotFoundComponent} from './pagenotfound/pagenotfound.component'
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  { path: '', component: HomePageComponent,},
  { path: 'curriculum', component: CurriculumComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'hobbies', component: HobbiesComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  // Route for 404 request : resources not found
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
