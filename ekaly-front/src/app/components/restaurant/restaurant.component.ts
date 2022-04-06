import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(public data: DataService,public router: Router,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPlat();
  }

  restaurant: any
  Data: any;
  Selection: any =[];

  getPlat(){
    this.restaurant = this.route.snapshot.queryParamMap.get("restaurant");
    this.data.findPlat(this.restaurant).subscribe((resultat:any)=>{
      if(resultat['status']==200){
        resultat['data']['quantite'] =0;
        this.Data = resultat['data'];
      }
    });
  }

  getSelection(){
    
  }

}
