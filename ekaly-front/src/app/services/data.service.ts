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
}
