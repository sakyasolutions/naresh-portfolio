import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [ {path:"about", component:AboutMeComponent},
  {path:"portfolio", component:PortfolioComponent},
  {path:"services", component:ServicesComponent},
  {path:"resume", component:ResumeComponent},
  {path:"contact", component:ContactComponent},
  {path:"", redirectTo: '/about', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
