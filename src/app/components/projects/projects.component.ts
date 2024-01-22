import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {

  projects:any =[
    {
      img:"../../../assets/images/myprojects/airbnb.png",
      textImg:"Air Bnb (web Design)",
      desc:"React js ,Bootstrap ,Tailwind css",
      repo:"https://github.com/Mohammad-abdo/airbnb",
      link:"https://github.com/Mohammad-abdo/airbnb"
    },
    {
      img:"../../../assets/images/myprojects/portofolio.png",
      textImg:"amazing presonal portofolio",
      desc:"Angular js ,Scss ,css3",
      repo:"https://github.com/Mohammad-abdo/Portofolio",
      link:"https://portofolio-ugh1.vercel.app/About"


    }
    ,
    {
      img:"../../../assets/images/myprojects/amazon.png",
      textImg:"ecomerce app ",
      desc:"next js ,tailwind css ,typescript",
      repo:"https://github.com/Mohammad-abdo/Amazon",
      link:"https://github.com/Mohammad-abdo/Amazon"


    }
    ,
    {
      img:"../../../assets/images/myprojects/kasper.png",
      textImg:"trade app ",
      desc:"Html5,Css3 ",
      repo:"https://github.com/Mohammad-abdo/KASPER.githup.io",
      link:"https://kasper-githup-io.vercel.app/"


    },
    {
      img:"../../../assets/images/myprojects/lavtic.png",
      textImg:"Social media app ",
      desc:"Html5,Css3 ,js ",
      repo:"https://github.com/Mohammad-abdo/lavtic",
      link:"https://lavtic.vercel.app/"
    },
    {
      img:"../../../assets/images/myprojects/netflix.png",
      textImg:"Netflix landing page  (Web Ddesign) ",
      desc:"Html5,Css3 ,js ",
      repo:"https://github.com/Mohammad-abdo/Netflix",
      link:"https://netflix-1-two.vercel.app/"
    },
    {
      img:"../../../assets/images/myprojects/meat_moot.png",
      textImg:"Meat Moot  (Web Ddesign) ",
      desc:"nextjs ,Tailwind Css ,React js ,typescript ",
      repo:"https://github.com/Mohammad-abdo/Meat-",
      link:"https://meat-murex.vercel.app/home"
    },
    {
      img:"../../../assets/images/myprojects/cimaclop.png",
      textImg:"Movie App clone  (Web Ddesign) ",
      desc:"Html5 ,Css 3, js  ",
      repo:"https://github.com/Mohammad-abdo/Cima_Clop",
      link:"https://cima-clop.vercel.app/"
    },
    {
      img:"../../../assets/images/myprojects/movie-app.png",
      textImg:"Movie App clone  (Web Ddesign) ",
      desc:"React js ,Bootstrap,sass ,reduix   ",
      repo:"https://github.com/Mohammad-abdo/Movies-land",
      link:"https://github.com/Mohammad-abdo/Movies-land"
    }
  ]

}
