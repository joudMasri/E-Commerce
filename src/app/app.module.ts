import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './components/serving/services.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ItemComponent } from './components/item/item.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { FrequentlyQuestionsComponent } from './components/frequently-questions/frequently-questions.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { FavoriteStyleComponent } from './components/favorite-style/favorite-style.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    NavbarComponent,
    CategoriesComponent,
    PortfolioComponent,
    ItemComponent,
    FooterComponent,
    TeamMemberComponent,
    FrequentlyQuestionsComponent,
    LoginSignupComponent,
    HomePageComponent,
    FavoriteComponent,
    CartComponent,
    FavoriteStyleComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
