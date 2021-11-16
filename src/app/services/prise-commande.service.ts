import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriseCommandeService {
  pizzasList =[
    {
      id : 0,
      nom : "ROYALE",
      prix:10
  },
  {
    id : 1,
    nom : "VEGETARIENNE",
    prix:10
  },
  {
    id : 2,
    nom : "SALMONE",
    prix : 11.5,
  },
  {
    id : 3,
    nom : "MEXICAINE",
    prix : 14.0,
  },
  {
    id : 4,
    nom : "4 FROMAGES",
    prix : 8.5,
  },
  {
    id : 5,
    nom : "ITALIENNE",
    prix : 9.5,
  },
  {
    id : 6,
    nom : "BECON",
    prix : 11.0,
  },
  {
    id : 7,
    nom : "CHICKEN",
    prix : 8.0
  }]

    dessertList=[
      {
        id : 1,
        nom : "TARTE",
        prix : 3.5
      },
      {
        id : 2,
        nom : "COCA",
        prix : 1.5
      },
      {
        id : 3,
        nom : "7'UP",
        prix : 1.5
      },
      {
        id : 4,
        nom : "GLACE",
        prix : 2.5
      },
      {
        id : 5,
        nom : "JUS",
        prix : 1.5
      },
      {
        id : 6,
        nom : "ORANGINA",
        prix : 1.5
      }]

  constructor() { }

  getAllDessertList(){
    return this.dessertList;
  }

  getAllPizzasList(){
    return this.pizzasList;
  }
}
