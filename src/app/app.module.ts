import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeImageComponent } from './home-image/home-image.component';
import { WaveAnimationComponent } from './wave-animation/wave-animation.component';
import { CarrouselPoemsComponent } from './carrousel-poems/carrousel-poems.component';
import { DataService } from './data.service';


const appRoutes: Routes=[
  {path:'home',component: HomeComponent},
  {path:'categories',component: CategoriesComponent},
  {path:'login',component: LoginComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    CategoriesComponent,
    HomeImageComponent,
    WaveAnimationComponent,
    CarrouselPoemsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
