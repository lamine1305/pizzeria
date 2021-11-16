import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommandeComponent } from './components/commande/commande.component';
import { JourneeExploitationComponent } from './components/journee-exploitation/journee-exploitation.component';
import { PriseCommandeComponent } from './components/prise-commande/prise-commande.component';
import { CommandeJourneeCouranteComponent } from './components/commande-journee-courante/commande-journee-courante.component';
import { RouterModule } from '@angular/router';
import { BilanComponent } from './components/bilan/bilan.component';
import { ClotureJourneeExploitationComponent } from './components/cloture-journee-exploitation/cloture-journee-exploitation.component';
import { CommandePriseRecapComponent } from './components/commande-prise-recap/commande-prise-recap.component';
import { PriseCommandeChapeuaComponent } from './components/prise-commande-chapeua/prise-commande-chapeua.component';
import { GestionMenuComponent } from './components/gestion-menu/gestion-menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CommandeComponent,
    JourneeExploitationComponent,
    PriseCommandeComponent,
    CommandeJourneeCouranteComponent,
    BilanComponent,
    ClotureJourneeExploitationComponent,
    CommandePriseRecapComponent,
    PriseCommandeChapeuaComponent,
    GestionMenuComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path :'',component: JourneeExploitationComponent },
      {path :'priseCommande',component: PriseCommandeChapeuaComponent },
      {path :'commandeEnCours',component: CommandeComponent},
      {path :'commandeJournee',component: CommandeJourneeCouranteComponent },
      {path :'cloture',component: ClotureJourneeExploitationComponent },
      {path :'bilan/:id',component: BilanComponent },
      {path :'menu',component: GestionMenuComponent },

      {path :'**',component: JourneeExploitationComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
