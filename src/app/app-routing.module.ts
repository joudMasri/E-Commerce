import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo :'navbar'},
  {path:'navbar' ,component:NavbarComponent , children:[
    {path:'',pathMatch:'full', redirectTo:'Home'},
    {path:'Home' ,component:HomePageComponent},
    {path:'Login-Signup',component : LoginSignupComponent },
    {path:'Favorite',component :FavoriteComponent },
    {path:'cart',component :CartComponent},
  ]},
  {path:'**', component:PageNotFoundComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
