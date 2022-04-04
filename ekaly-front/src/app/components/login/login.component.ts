import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public data: DataService,public router: Router) { }

  ngOnInit(): void {
  }

  Mail: string = '';
  MotDePasse: string = "";
  error_msg: string ='';

  Connexion(){
    this.data.connexion(this.Mail,this.MotDePasse).subscribe((resultat: any)=>{
      console.log(resultat['token']);
      localStorage.setItem('token',resultat["token"]);
      this.router.navigate(['accueil']);
    },()=>{
      this.error_msg = "Verifiez votre adresse e-mail et/ou mot de passe!";
    });
  }

}
