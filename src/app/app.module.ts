import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PresonalDataComponent } from './components/presonal-data/presonal-data.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CertificatesComponent } from './components/certificates/certificates.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PresonalDataComponent,
    ProjectsComponent,
    FooterComponent,
    HomeComponent,
    ResumeComponent,
    SkillsComponent,
    CertificatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
