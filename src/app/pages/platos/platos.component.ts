import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';


@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {
  public listFood:any[]=[]
  loading= false




  constructor(private _foodService: FoodService
  ) {
  

   }

   respondiendoBusqueda=(foodBusqueda:any)=>{
   this.listFood = []
   this.loading=true;
    
   setTimeout(()=>{
    this._foodService.getFood(foodBusqueda).subscribe(data=>{
      this.loading=false;
      this.listFood=data;
    },err=>{
      console.log(err)
    })
   },1000)
   }


  ngOnInit(): void {
  }

}
