import { Component, OnInit } from '@angular/core';
import { CommandeJourneeService } from 'src/app/services/commande-journee.service';

@Component({
  selector: 'app-commande-journee-courante',
  templateUrl: './commande-journee-courante.component.html',
  styleUrls: ['./commande-journee-courante.component.css']
})
export class CommandeJourneeCouranteComponent implements OnInit {

  constructor(private commandeJourneeService : CommandeJourneeService) { }
  commandesJourneeList:any;
  ngOnInit() {
    this.getCommandesJournee();
  }

  getCommandesJournee(){
    this.commandesJourneeList = this.commandeJourneeService.getAllCommandesJournee();
  }


}
