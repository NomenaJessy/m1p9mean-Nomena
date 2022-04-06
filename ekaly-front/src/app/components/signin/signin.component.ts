import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public data: DataService, public router: Router) { }

  ngOnInit(): void {
    this.isLogged();
  }

  error_msg: string='';
  Nom: string = '';
  Pseudo: string='';
  DateNaissance: string='';
  Profil: string='Client';
  Mail: string='';
  MotDePasse: string='';

  Inscription(){
    this.data.inscription(this.Nom,this.Pseudo,this.DateNaissance,this.Profil,this.Mail,this.MotDePasse).subscribe((resultat: any)=>{
      console.log(resultat['token']);
      localStorage.setItem('token',resultat["token"]);
      this.router.navigate(['accueil']);
    },()=>{
      this.error_msg = "Ce compte existe deja";
    });
  }

  isLogged(){
    if(localStorage.getItem('token') != null){
      this.router.navigate(['accueil']);
    }
  }
}
