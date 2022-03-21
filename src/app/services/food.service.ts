import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment  } from 'src/environments/environment';




import { Food , Hit} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  
       
  _url="https://api.edamam.com/api/recipes/v2?type=public&app_id="+environment.API_ID+"&app_key="+environment.API_KEY

  

  constructor(
    private http: HttpClient
  ) { 
    console.log('Servicio Food')
  }
  getFood(food:string):Observable<Hit[]>{
    const URL = this._url + '&q=' + food
    return this.http.get<Food>(URL)
    .pipe(
      map(res=>res.hits))
  }
}


