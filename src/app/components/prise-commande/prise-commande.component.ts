import { Component, OnInit } from '@angular/core';
import { CommandeEntity } from 'src/app/CommandeEntity';
import { PriseCommandeService } from 'src/app/services/prise-commande.service';

@Component({
  selector: 'app-prise-commande',
  templateUrl: './prise-commande.component.html',
  styleUrls: ['./prise-commande.component.css']
})
export class PriseCommandeComponent implements OnInit {

 commandeEnity : CommandeEntity;   
pizzasList : any;
  dessertsList: { id: number; nom: string; prix: number; }[];

constructor(private priseCommandeService : PriseCommandeService) {

   }
  ngOnInit() {
    this.getAllPizzasLists();
    this.getAllDessertsLists();
  }

  prendreCommande(){
  }

  getAllPizzasLists(){
    this.pizzasList= this.priseCommandeService.getAllPizzasList();
}

getAllDessertsLists(){
  this.dessertsList= this.priseCommandeService.getAllDessertList();


}
}