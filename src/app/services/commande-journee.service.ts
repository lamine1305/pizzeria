import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandeJourneeService {
  commandesJourneeList =[
    {
      id : 1,
      nom : "SALMONE",
      heure : "14:10:2021 23:38",
      prix:13
  },
  {
    id : 2,
    nom : "ROYALE",
    heure : "14:10:2021 20:05",
    prix:10
  },
  {
    id : 3,
    nom : "4 FROMAGES",
    heure : "14:10:2021 22:25",
    prix:8
  },
  {
    id : 4,
    nom : "ROYALE",
    heure : "14:10:2021 22:04",
    prix:10
  },
  {
    id : 5,
    nom : "SALMONE",
    heure : "14:10:2021 21:15",
    prix:13
  },
  ]

  constructor() { }

  getAllCommandesJournee(){
    return this.commandesJourneeList;
  }

}
