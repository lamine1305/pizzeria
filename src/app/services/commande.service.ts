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
      terminee : true,
      annulee : false

  },
  {
    id : 1,
    nom : "REINE",
    prix : 13.0,
    statutPreparation : "EN COURS",
    payee : "OUI",
    enCours : true,
    aFaire : false,
    terminee : false,
    annulee : false
  },
  {
    id : 2,
    nom : "SALMONE",
    prix : 11.5,
    statutPreparation : "PRETE",
    payee : "NON",
    enCours : false,
    aFaire : false,
    terminee : true,
    annulee : false
  },
  {
    id : 3,
    nom : "VEGETARIENNE",
    prix : 12.5,
    statutPreparation : "EN COURS",
    payee : "NON",
    enCours:true,
    aFaire : false,
    terminee : false,
    annulee : false

  },
  {
    id : 4,
    nom : "4 FROMAGES",
    prix : 8.0,
    statutPreparation:"ANNULEE",
    payee:"NON",
    enCours:false,
    aFaire : false,
    terminee : false,
    annulee : true
  },
  ]

  constructor() { }

  getAllCommandes(){
    console.log(this.commandesList[0]);
    return this.commandesList;
  }

  prendreCommandes(idCommande: any) {
    this.commandesList[idCommande].enCours=true;
    this.commandesList[idCommande].annulee=false;
    this.commandesList[idCommande].terminee=false;
    this.commandesList[idCommande].aFaire=false;
    this.commandesList[idCommande].statutPreparation="EN COURS";
    return this.commandesList;

  }

  terminerCommandes(idCommande: any) {
    this.commandesList[idCommande].terminee=true;
    this.commandesList[idCommande].annulee=false;
    this.commandesList[idCommande].enCours=false;
    this.commandesList[idCommande].aFaire=false;
    this.commandesList[idCommande].statutPreparation="PRETE";
    return this.commandesList;
  }

  annulerCommandes(idCommande: any) {
    this.commandesList[idCommande].annulee=true;
    this.commandesList[idCommande].terminee=false;
    this.commandesList[idCommande].enCours=false;
    this.commandesList[idCommande].aFaire=false;
    this.commandesList[idCommande].statutPreparation="ANNULEE";
    return this.commandesList;
  }
  
}
