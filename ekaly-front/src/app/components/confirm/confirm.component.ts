import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(public data: DataService,public router:Router,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getIdUtilisateur();
  }

  idUtilisateur: any;
  MotDePasse: string= '';
  error_msg: string='';

  getIdUtilisateur(){
    this.idUtilisateur = this.route.snapshot.queryParamMap.get("code");
  }

  Confirmation(){
    this.data.Confirmation(this.idUtilisateur,this.MotDePasse).subscribe((resultat:any)=>{
      localStorage.setItem('token',resultat['token']);
      this.router.navigate(['accueil']);
    },()=>{
      this.error_msg = "Mot de passe non valide";
    });
  }
}
