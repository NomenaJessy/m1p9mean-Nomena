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
    this.Selection = [];
  }

  restaurant: any
  Data: any=[];
  Selection: any = [];

  getPlat(){
    this.restaurant = this.route.snapshot.queryParamMap.get("restaurant");
    this.data.findPlat(this.restaurant).subscribe((resultat:any)=>{
      if(resultat['status']==200){
        for(let datas of resultat['data']){
          datas["Quantite"] = 0;
          this.Data.push(datas);
        }
      }
    });
  }

  addSelection(index: any){
    this.Data[index]["Quantite"] +=1;
  }

  removeSelection(index: any){
    if(this.Data[index]["Quantite"]>=0){
      this.Data[index]["Quantite"] -=1;
    }
  }

  getSelection(){
    for(let select of this.Data){
      if(select["Quantite"] > 0){
        this.Selection.push(select);
      }
    }
    this.Selection.forEach((element:any,index:any) => {
      if(element['Quantite']==0) delete this.Selection[index];
    });
    console.log(this.Selection);
  }


}
