import {Input, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CurriculumComponent} from './curriculum/curriculum.component';
import {HomePageComponent} from './homepage/homepage.component';
import {ProjectsComponent} from './projects/projects.component';
import {AboutComponent} from './about/about.component';
import {HobbiesComponent} from './hobbies/hobbies.component';
import {PageNotFoundComponent} from './pagenotfound/pagenotfound.component'
import {ContactComponent} from "./contact/contact.component";
import {SvgComponent} from "./svg/svg.component";
import {HobbiesSportComponent} from "./hobbies-sport/hobbies-sport.component";
import {HobbiesArtComponent} from "./hobbies-art/hobbies-art.component";

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'curriculum', component: CurriculumComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'hobbies/sport', component: HobbiesSportComponent},
  { path: 'hobbies/art', component: HobbiesArtComponent},
  { path: 'hobbies', component: HobbiesComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  // { path: 'svg/:id', component: SvgComponent},
  { path: 'svg/:id', component: PageNotFoundComponent},
  { path: 'index.html',   redirectTo: '', pathMatch: 'full' },
  // Route for 404 request : resources not found
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  @Input() language: number = 0;
}
