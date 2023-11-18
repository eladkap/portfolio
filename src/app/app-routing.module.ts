import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent, title: 'Portfolio - Home'},
  {path: 'about', component: AboutComponent, title: 'Portfolio - About'},
  {path: 'skills', component: SkillsComponent, title: 'Portfolio - Skills'},
  {path: 'education', component: EducationComponent, title: 'Portfolio - Education'},
  {path: 'projects', component: ProjectsComponent, title: 'Portfolio - Projects'},
  {path: 'experience', component: ExperienceComponent, title: 'Portfolio - Experience'},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
