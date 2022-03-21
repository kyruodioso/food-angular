import { Component, EventEmitter, OnInit, Output,} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() busquedaEmitida = new EventEmitter<string>();

  busqueda=''




  clearSearch=()=>{this.busqueda=''}

  constructor(private _foodService: FoodService) {

   }

  ngOnInit(): void {
   
  }

  comenzarBusqueda=()=>{
    const busqueda=this.busqueda
    this.busquedaEmitida.emit(busqueda)
         /* this._foodService.getFood(this.busqueda).emit(busqueda)*/
          
    
  }

  


}
