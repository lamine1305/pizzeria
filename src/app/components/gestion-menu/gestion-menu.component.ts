import { Component, OnInit } from '@angular/core';
import { PriseCommandeService } from 'src/app/services/prise-commande.service';

@Component({
  selector: 'app-gestion-menu',
  templateUrl: './gestion-menu.component.html',
  styleUrls: ['./gestion-menu.component.css']
})
export class GestionMenuComponent implements OnInit {
  pizzasList : any;
  constructor(private priseCommandeService : PriseCommandeService) { }

  ngOnInit() {
    this.getAllPizzasLists();
  }  
  
  getAllPizzasLists(){
    this.pizzasList= this.priseCommandeService.getAllPizzasList();
    console.log(this.pizzasList)
}
}
