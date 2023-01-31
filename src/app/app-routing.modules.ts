import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPage } from "./pages/landing/landing.page";
import { TrainerPage } from "./pages/trainer/trainer.page";
import { PokemonCataloguePage } from "./pages/pokemon-catalogue/pokemon-catalogue.page";



const routes: Routes = [

  {
    path: "",
    component: LandingPage,
  },
  {
    path: "trainer",
    component: TrainerPage,

  },
  {
    path: "pokemon-catalogue",
    component: PokemonCataloguePage,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }