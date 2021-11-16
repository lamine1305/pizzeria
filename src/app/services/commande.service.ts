import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  commandesList =[
    {
      id : 0,
      nom : "ROYALE",
      prix:10,
      statutPreparation:"PRETE",
      payee:"NON",
      enCours:false,
      aFaire : false,
      termine : true
  },
  {
    id : 1,
    nom : "REINE",
    prix : 13.0,
    statutPreparation : "EN COURS",
    payee : "OUI",
    enCours : true,
    aFaire : false,
    termine : false
  },
  {
    id : 2,
    nom : "SALMONE",
    prix : 11.5,
    statutPreparation : "PRETE",
    payee : "NON",
    enCours : false,
    aFaire : false,
    termine : true
  },
  {
    id : 3,
    nom : "VEGETARIENNE",
    prix : 12.5,
    statutPreparation : "EN COURS",
    payee : "NON",
    enCours:true,
    aFaire : false,
    termine : false
  },
  {
    id : 4,
    nom : "4 FROMAGES",
    prix : 8.0,
    statutPreparation:"A FAIRE",
    payee:"OUI",
    enCours:false,
    aFaire : true,
    termine : false
  },
  ]

  constructor() { }

  getAllCommandes(){
    console.log(this.commandesList[0]);
    return this.commandesList;
  }

  prendreCommandes(idCommande: any) {
    this.commandesList[idCommande].enCours=true;
    this.commandesList[idCommande].termine=false;
    this.commandesList[idCommande].aFaire=false;
    this.commandesList[idCommande].statutPreparation="EN COURS";
    return this.commandesList;

  }

  terminerCommandes(idCommande: any) {
    this.commandesList[idCommande].termine=true;
    this.commandesList[idCommande].enCours=false;
    this.commandesList[idCommande].aFaire=false;
    this.commandesList[idCommande].statutPreparation="PRETE";
    return this.commandesList;
  }
}
