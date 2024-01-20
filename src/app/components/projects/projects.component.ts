import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
projects:any=[
  {img:'../../../assets/images/projects/E-Commerce.png',textImg:'E-Commerce Web App',desc:'JWT , Login & Register ,Operation CRUD for Products , Intersepter , Services , HTTP , Routing , Angular Matrial , Payment Method , Add product to cart , Fillter',repo:'https://github.com/MeladKarmy/shop.git',link:'https://shop-xi-two.vercel.app/home'},
  {img:'../../../assets/images/projects/dashboard.png',textImg:'Dashboard',desc:'NGRX Translate , Angular Matrial , Services , Binding , Life Cycle , Drag &Drop , Responsive Design ',repo:'https://github.com/MeladKarmy/Dash-Board.git',link:'https://dash-board-melad.vercel.app/'},
  {img:'../../../assets/images/projects/todoApp.png',textImg:'To Do App',desc:'Angular Matrial , Services , Binding , Life Cycle , Reactive Forms , HTTP , Operation CRUD , Fillter ',repo:'https://github.com/MeladKarmy/To-Do-App.git',link:'https://to-do-app-hazel-pi.vercel.app/'},
  {img:'../../../assets/images/projects/login.png',textImg:'Login & Register',desc:'Java Script , CSS , HTML , Responsive Design',repo:'https://github.com/MeladKarmy/login-and-Register.git',link:'https://meladkarmy.github.io/login-and-Register/index.html'},
  {img:'../../../assets/images/projects/construction.png',textImg:'landing page (pure css)',desc:'HTML , CSS',repo:'https://github.com/MeladKarmy/Responsive-web-site.git',link:'https://meladkarmy.github.io/Responsive-web-site/'},
  {img:'../../../assets/images/projects/constructionBootstrap.png',textImg:'landing page (Bootstrap)',desc:'HTML , CSS , Bootstrap',repo:'https://github.com/MeladKarmy/Bootstrap-web-site.git',link:'https://meladkarmy.github.io/Bootstrap-web-site/'},
  {img:'../../../assets/images/projects/GEC.png',textImg:'GEC landing page',desc:'HTML , CSS , Responsive Design',repo:'https://github.com/MeladKarmy/GEC.git',link:'https://meladkarmy.github.io/GEC/'},
  {img:'../../../assets/images/projects/pets.png',textImg:'Pets Shop landing page',desc:'HTML , CSS , Responsive Design , Media Query',repo:'https://github.com/MeladKarmy/pets-shop.git',link:'https://meladkarmy.github.io/pets-shop/'},
  {img:'../../../assets/images/projects/OnlineShop.png',textImg:'Online Shop',desc:'HTML , CSS , Responsive Design , Media Query',repo:'https://github.com/MeladKarmy/online-shopping.git',link:'https://meladkarmy.github.io/online-shopping/'},
  {img:'../../../assets/images/projects/cv.png',textImg:'CV Example (Web Design)',desc:'HTML , CSS ',repo:'https://github.com/MeladKarmy/Example-for-CV.git',link:'https://meladkarmy.github.io/Example-for-CV/'},
  {img:'../../../assets/images/projects/CarRental.png',textImg:'Car Rental (Web Design)',desc:'HTML , CSS ',repo:'https://github.com/MeladKarmy/Car-Rental-Web-Design.git',link:'https://meladkarmy.github.io/Car-Rental-Web-Design/'},
  {img:'../../../assets/images/projects/BussinesShop.png',textImg:'Business Shop (Web Design)',desc:'HTML , CSS ',repo:'https://github.com/MeladKarmy/Business-shop-Web-Design-.git',link:'https://meladkarmy.github.io/Business-shop-Web-Design-/'},
  {img:'../../../assets/images/projects/CarWeb.png',textImg:'Cars Web (Web Design)',desc:'HTML , CSS ',repo:'https://github.com/MeladKarmy/cars-web-Design-.git',link:'https://meladkarmy.github.io/cars-web-Design-/'},
]
}
