import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public data:DataService,public router:Router) { }

  ngOnInit(): void {
    this.isLogged();
  }

  isLogged(){
    if(localStorage.getItem('token')===null){
      this.router.navigate(['login']);
    }
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  
}
