import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue.page';
import { LandingPage } from './pages/landing/landing.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { AppRoutingModule } from './app-routing.modules';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';



@NgModule({
  declarations: [
    AppComponent,
    PokemonCataloguePage,
    LandingPage,
    TrainerPage,
    LoginFormComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
