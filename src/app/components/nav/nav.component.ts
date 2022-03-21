import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

showMenu:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

  onMenu(){
    this.showMenu= !this.showMenu
  }



}
