import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {

certifics:any=
[

  // {img:'../../../assets/images/FullStack.svg',textImg:'ITI Full Stack',link:''},
  // {img:'../../../assets/images/NodeJs.svg',textImg:'Node Js',link:''},
  // {img:'../../../assets/images/IntroToJavaScript.svg',textImg:'Intro To JS',link:''},
  // {img:'../../../assets/images/Agile.svg',textImg:'Agile',link:''},
  {img:'../../../assets/images/certificat/mong-trans.png',textImg:'MongoDB Transactions',link:''},
  {img:'../../../assets/images/certificat/mongo-intro.png',textImg:'MongoDB ',link:''},
  {img:'../../../assets/images/certificat/kamsat.png',textImg:'Freelancing Kamsat',link:''},
  {img:'../../../assets/images/certificat/fwd.png',textImg:'Professional Front-End FWD',link:''},
  // {img:'../../../assets/images/UIX.svg',textImg:'UX Design Fundamentals',link:''},
  {img:'../../../assets/images/certificat/html.png',textImg:'HTML & CSS',link:''},
  {img:'../../../assets/images/certificat/database.png',textImg:'Database Fundamentals',link:''},

]


}
