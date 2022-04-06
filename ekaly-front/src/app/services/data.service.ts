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

  userById(id: any){
    return this.http.get(base_url+'/findUserById/'+id);
  }

  findProfil(profil: any){
    return this.http.get(base_url+'/findProfil/'+profil);
  }

  findCommande(){
    return this.http.get(base_url+'Commande');
  }

  findPlat(restaurant: any){
    return this.http.get(base_url+'/Plat/'+restaurant);
  }
}
