import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(public data: DataService,public router: Router) {

  }

  ngOnInit(): void {
    this.findUserById();
    this.getRestaurant();
    this.getCommande();
  }

  Nom: string='';
  Pseudo: string='';
  Profil: string='';
  DataRestaurant: any;
  DataCommande: any;

  findUserById(){
    var idUtilisateur = localStorage.getItem('token');
    this.data.userById(idUtilisateur).subscribe((resultat: any)=>{
      if(resultat['status']===200){
        this.Nom = resultat['data']['Nom'];
        this.Profil = resultat['data']['Profil'];
        this.Pseudo = resultat['data']['Pseudo'];
      }
    });
  }

  getRestaurant(){
    this.data.findProfil('Restaurant').subscribe((resultat : any)=>{
      if(resultat['status']===200){
        this.DataRestaurant = resultat['data'];
      }
    });
  }

  getCommande(){
    this.data.findCommande().subscribe((resultat:any)=>{
      if(resultat['status']==200){
        this.DataCommande = resultat['data'];
      }
    });
  }

  goCommande(restaurant: any){
    this.router.navigate(['/commande'],{queryParams: {restaurant: restaurant}});
  }

  goRestaurant(restaurant: any){
    this.router.navigate(['/restaurant'],{queryParams: {restaurant: restaurant}});
  }

  goPlat(restaurant: any){
    this.router.navigate(['/plat'],{queryParams: {restaurant: restaurant}});
  }

}
