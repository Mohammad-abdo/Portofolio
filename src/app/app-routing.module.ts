import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PresonalDataComponent } from './components/presonal-data/presonal-data.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { CertificatesComponent } from './components/certificates/certificates.component';

const routes: Routes = [
  {path:'',redirectTo:'About',pathMatch:'full'},
  {path:'About',component:PresonalDataComponent},
  {path:'project',component:ProjectsComponent},
  {path:'Resume',component:ResumeComponent},
  {path:'certificates',component:CertificatesComponent},
  {path:'**',component:PresonalDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
