import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  constructor(public data: DataService,public router: Router,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRestaurant();
    this.getCommande();
  }

  Restaurant: any;
  Data: any;

  getRestaurant(){
    this.Restaurant = this.route.snapshot.queryParamMap.get('restaurant');
  }

  getCommande(){
    this.data.findCommandeResto(this.Restaurant).subscribe((resultat:any)=>{
      if(resultat['status']===200){
        this.Data = resultat['data'];
      }
    });
  }
}
