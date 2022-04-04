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
  }

  Nom: string='';

  findUserById(){
    var idUtilisateur = localStorage.getItem('token');
    this.data.userById(idUtilisateur).subscribe((resultat: any)=>{
      this.Nom = resultat['Nom'];
    });
  }

}
