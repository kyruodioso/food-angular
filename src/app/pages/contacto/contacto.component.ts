import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapLocationDot, faMobilePhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
   /*Icons*/
  faMapLocationDot= faMapLocationDot
  faEnvelope= faEnvelope
  faMobilePhone=faMobilePhone
  /*icons Media*/
  faFacebook=faFacebook
  faTwitter= faTwitter
  faLinkedin=faLinkedin
  faInstagram= faInstagram

  constructor() { }

  ngOnInit(): void {
  }

}
