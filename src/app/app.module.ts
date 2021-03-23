import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TdRegistrationComponent } from './td-registration/td-registration.component';
import { MdRegistrationComponent } from './md-registration/md-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TechRoutingModule } from './tech-routing/tech-routing.module';
import { SortPipe } from './sort.pipe';
import { SearchPipe } from './search.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WebComponent } from './web/web.component';
import { JavaComponent } from './java/java.component';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { FooterComponent } from './footer/footer.component';
import { MycolorDirective } from './mycolor.directive';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
//import { TranslateLoader } from '@ngx-translate/core/lib/translate.loader';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader/lib/http-loader';
//import { TranslateModule } from '@ngx-translate/core';
//export function HttpLoaderFactory(http: HttpClient) {
//  return new TranslateHttpLoader(http, './assets/', '.json')
//}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewsComponent,
    TechnologiesComponent,
    TdRegistrationComponent,
    MdRegistrationComponent,
    SortPipe,
    SearchPipe,
    WebComponent,
    JavaComponent,
    AngularComponent,
    JavascriptComponent,
    FooterComponent,
    MycolorDirective,
    HeaderComponent,
    LoginComponent,
   
   
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule, TechRoutingModule
    //TranslateModule.forRoot({
    //  loader: {
    //    provide: TranslateLoader,
    //    useFactory: HttpLoaderFactory,
    //    deps: [HttpClient]
    //  }

    //})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
