import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {

  constructor(public data: DataService,public router: Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getIdRestaurant();
    this.getPlat();
  }

  Restaurant: any= '';
  error_msg: string='';
  NomPlat: string='';
  NomCategorie: string='';
  Description: string='';
  Prix: number= 0;
  Data: any;
  getIdRestaurant(){
    this.Restaurant = this.route.snapshot.queryParamMap.get('restaurant');
  }

  getPlat(){
    this.data.findPlat(this.Restaurant).subscribe((resultat:any)=>{
      if(resultat['status']===200){
        this.Data = resultat['data'];
      }
    })
  }

  InsertPlat(){
    this.data.InsertPlat(this.NomPlat,this.NomCategorie,this.Description,this.Restaurant,this.Prix).subscribe((resultat:any)=>{
      this.router.navigate(['plat']);
    });
  }
}
