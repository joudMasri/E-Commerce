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
import { FrequentlyQuestionsComponent } from './components/frequently-questions/frequently-questions.component'
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
    FrequentlyQuestionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
