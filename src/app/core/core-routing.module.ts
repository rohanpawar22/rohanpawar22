import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about-me', loadChildren: () => import('src/app/about-me/about-me.module').then(m => m.AboutMeModule), data: { title: 'About Me' }
  },
  {
    path: 'experience', loadChildren: () => import('src/app/experience/experience.module').then(m => m.ExperienceModule), data: { title: 'Experience' }
  },
  {
    path: 'education', loadChildren: () => import('src/app/education/education.module').then(m => m.EducationModule), data: { title: 'Education' }
  },
  {
    path: 'connect', loadChildren: () => import('src/app/connect/connect.module').then(m => m.ConnectModule), data: { title: 'Connect' }
  },
  {
    path: 'creator', loadChildren: () => import('src/app/creator/creator.module').then(m => m.CreatorModule), data: { title: 'Creator' }
  },
  { path: '', redirectTo: 'about-me', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
