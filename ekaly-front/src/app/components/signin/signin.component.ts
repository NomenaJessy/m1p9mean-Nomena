import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

  error_msg: string='';
  Nom: string = '';
  Pseudo: string='';
  DateNaissance: string='';
  Profil: string='Client';
  Mail: string='';
  MotDePasse: string='';

  Inscription(){
    this.data.inscription(this.Nom,this.Pseudo,this.DateNaissance,this.Profil,this.Mail,this.MotDePasse).subscribe(resultat=>{
      console.log(resultat);
    },()=>{
      this.error_msg = "Ce compte existe deja";
    });
  }
}
