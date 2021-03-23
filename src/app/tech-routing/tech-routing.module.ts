import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { TdRegistrationComponent } from '../td-registration/td-registration.component';
import { MdRegistrationComponent } from '../md-registration/md-registration.component';
import { WebComponent } from '../web/web.component';
import { JavaComponent } from '../java/java.component';
import { AngularComponent } from '../angular/angular.component';
import { JavascriptComponent } from '../javascript/javascript.component';
import { LoginComponent } from '../login/login.component';



const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Reviews', component: ReviewsComponent },
  {
    path: 'Technologies', component: TechnologiesComponent,
  children: [
    { path: 'web', component: WebComponent },
    { path: 'java', component: JavaComponent },
    { path: 'angular', component: AngularComponent },
    { path: 'javascript', component: JavascriptComponent }
  ],
  },
  { path: 'TdRegistration', component: TdRegistrationComponent },
  { path: 'MdRegistration', component: MdRegistrationComponent },

 
  
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class TechRoutingModule { }
export const routingComponents = [HomeComponent, ReviewsComponent,
  TechnologiesComponent, TdRegistrationComponent, MdRegistrationComponent, WebComponent, JavaComponent, AngularComponent, JavascriptComponent]
