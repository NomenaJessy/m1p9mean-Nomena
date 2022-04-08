import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers:[DatePipe]
})
export class RestaurantComponent implements OnInit {
  
  dateCommande = formatDate(new Date(),'yyyy-mm-dd','en');

  constructor(public data: DataService,public router: Router,public route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.getPlat();
    this.getUtilisateur();
  }
  error_msg: any;
  restaurant: any
  Data: any=[];
  Selection: any = [];
  Livraison: string='';
  utilisateur: any;

  getPlat(){
    this.restaurant = this.route.snapshot.queryParamMap.get("restaurant");
    this.data.findPlat(this.restaurant).subscribe((resultat:any)=>{
      if(resultat['status']==200){
        for(let datas of resultat['data']){
          datas["Quantite"] = 0;
          this.Data.push(datas);
        }
      }
    });
  }

  getUtilisateur(){
    const idUtilisateur = localStorage.getItem('token');
    this.data.userById(idUtilisateur).subscribe((resultat:any)=>{
      if(resultat['status']===200){
        this.utilisateur = resultat['data']['Mail'];
      }
    });
  }

  addSelection(index: any){
    this.Data[index]["Quantite"] +=1;
  }

  removeSelection(index: any){
    if(this.Data[index]["Quantite"]>=0){
      this.Data[index]["Quantite"] -=1;
    }
  }

  getSelection(){
    for(let select of this.Data){
      if(select["Quantite"] > 0){
        this.Selection.push(select);
      }
    }
    this.Selection.forEach((element:any,index:any) => {
      if(element['Quantite']==0) delete this.Selection[index];
    });
    console.log(this.Selection);
    if(this.Livraison==''){
      this.error_msg = "Veuillez indiquer le lieu de livraison";
    }else{
      console.log("Lien");
      this.InsertCommande();
    }
    this.Selection=[];
  }

  InsertCommande(){
    let Quantite=[];
    let Plat = [];
    let prixTotal = 0;
    for(let qte of this.Selection){
      Quantite.push(qte['Quantite']);
      Plat.push(qte['NomPlat']);
      prixTotal += qte['Quantite'] * qte['Prix'];
    }
    console.log(this.dateCommande);
    this.data.InsertCommande(this.restaurant,this.utilisateur,Plat,Quantite,this.Livraison,prixTotal,this.dateCommande).subscribe((resultat:any)=>{
      this.router.navigate(['accueil']);
    });
    // Restaurant: string,utilisateur: string,plat: string[],quantite: number[],livraison: string,prixTotal: number,dateCommande: Date
  }

}
