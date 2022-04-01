import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

  Mail: string = '';
  MotDePasse: string = "";
  error_msg: string ='';

  Connexion(){
    this.data.connexion(this.Mail,this.MotDePasse).subscribe(resultat=>{
      console.log(resultat);
    },error=>{
      this.error_msg = error;
    });
  }

}
