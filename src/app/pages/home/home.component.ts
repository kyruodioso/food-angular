import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  tl = gsap.timeline({ defaults: { ease: 'power1.out' } })

  gsapEffect(){
    this.tl.to('.text', { y: "0%", duration: 1, stagger: 0.25 });
    this.tl.to('.slider', { y: "-100%", duration: 1.5, delay: 0.5 })
    this.tl.to('.intro', { y: "-100%", duration: 1.5 }, "-=1")
    this.tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 })
    this.tl.fromTo('.big-text', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1');
  }



  constructor() {
  
  }

  ngOnInit(): void {
     this.gsapEffect()
  }

}
