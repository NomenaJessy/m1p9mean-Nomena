import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(public data: DataService,public router: Router) { }

  ngOnInit(): void {
    this.findUser();
  }

  error_msg: string = '';
  Nom: string = '';
  Pseudo: string='';
  DateNaissance: string='';
  Profil: string='';
  Mail: string='';
  Data: any;

  Inscription(){
    this.data.inscriptionProfil(this.Nom,this.Pseudo,this.DateNaissance,this.Profil,this.Mail).subscribe((resultat: any)=>{
       this.router.navigate(['profil']);
    },()=>{
      this.error_msg = "Ce compte existe deja";
    });
  }

  findUser(){
    this.data.findUser().subscribe((resultat:any)=>{
      if(resultat['status']===200){
        this.Data = resultat['data'];
      }
    });
  }

}
