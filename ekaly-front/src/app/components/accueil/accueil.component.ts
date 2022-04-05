import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(public data: DataService) {

  }

  ngOnInit(): void {
    this.findUserById();
    this.getRestaurant();
    this.getCommande();
  }

  Nom: string='';
  Profil: string='';
  DataRestaurant: any;
  DataCommande: any;

  findUserById(){
    var idUtilisateur = localStorage.getItem('token');
    this.data.userById(idUtilisateur).subscribe((resultat: any)=>{
      if(resultat['status']===200){
        this.Nom = resultat['data']['Nom'];
        this.Profil = resultat['data']['Profil'];
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

}
