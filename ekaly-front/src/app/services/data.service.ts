import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { base_url } from 'src/environments/environment';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient,public helper: HelperService) { }

  connexion(mail: string,motdepasse: string){
    const options = this.helper.formOption();

    let body = {
      'Mail': mail,
      'MotDePasse': motdepasse
    };
    return this.http.post(base_url+'/Connexion',body,options);
  }

  findUser(){
    return this.http.get(base_url+'/findUser'); 
  }

  inscription(nom: string,pseudo: string,datenaissance: string,profil: string,mail: string,motdepasse: string){
    const options = this.helper.formOption();

    let body = {
      'Nom': nom,
      'Pseudo': pseudo,
      'DateNaissance': datenaissance,
      'Profil': profil,
      'Mail': mail,
      'MotDePasse': motdepasse
    }
    return this.http.post(base_url + '/Inscription',body,options);
  }

  inscriptionProfil(nom: string,pseudo: string,datenaissance: string,profil: string,mail: string){
    const options = this.helper.formOption();
    let body = {
      'Nom': nom,
      'Pseudo': pseudo,
      'DateNaissance': datenaissance,
      'Profil': profil,
      'Mail': mail
    }
    return this.http.post(base_url+'/InscriptionProfil',body,options);
  }

  Confirmation(id: string,MotDePasse: string){
    const options = this.helper.formOption();
    let body={
      'id': id,
      'MotDePasse': MotDePasse
    };
    return this.http.put(base_url+'/Confirmation',body,options);
  }

  InsertPlat(NomPlat: string,NomCategorie: string,Description: string,Restaurant: string,Prix: number){
    const options = this.helper.formOption();
    let body={
      'NomPlat': NomPlat,
      'NomCategorie': NomCategorie,
      'Description': Description,
      'Restaurant': Restaurant,
      'Prix': Prix
    };
    return this.http.post(base_url+'/Plat',body,options);
  }

  InsertCommande(Restaurant: string,utilisateur: string,plat: string[],quantite: number[],livraison: string,prixTotal: number,dateCommande: string){
    const options = this.helper.formOption();
    let body={
      'restaurant':Restaurant,
      'utilisateur': utilisateur,
      'plat': plat,
      'quantite': quantite,
      'livraison': livraison,
      'prixTotal': prixTotal,
      'dateCommande': dateCommande
    }
    return this.http.post(base_url+'/Commande',body,options);
  }

  userById(id: any){
    return this.http.get(base_url+'/findUserById/'+id);
  }

  findProfil(profil: any){
    return this.http.get(base_url+'/findProfil/'+profil);
  }

  findCommande(){
    return this.http.get(base_url+'/Commande');
  }

  findPlat(restaurant: any){
    return this.http.get(base_url+'/Plat/'+restaurant);
  }

  findCommandeResto(restaurant: any){
    return this.http.get(base_url+'/CommandeResto/'+restaurant);
  }
}
