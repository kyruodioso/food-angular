import { Component, Input, OnInit } from '@angular/core';
import { faClock, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-platos-cards',
  templateUrl: './platos-cards.component.html',
  styleUrls: ['./platos-cards.component.css']
})
export class PlatosCardsComponent implements OnInit {

  @Input() listFood:any;

    /*Icons*/
    faStar= faStar
    faStarO=faStarHalf
    faClock=faClock

  constructor() { }

  ngOnInit(): void {
  }

}
