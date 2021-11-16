import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  constructor(private commandeService : CommandeService) { }
  commandesList:any;
  ngOnInit() {
    this.getCommandes();
  }

  getCommandes(){
    this.commandesList = this.commandeService.getAllCommandes();
  }

  prendreCommande(idCommande){
    this.commandeService.prendreCommandes(idCommande);
  }

  terminerCommande(idCommande){
    console.log(idCommande)
    this.commandeService.terminerCommandes(idCommande);
  }
}
