import { Component } from '@angular/core';

@Component({
  selector: 'app-presonal-data',
  templateUrl: './presonal-data.component.html',
  styleUrls: ['./presonal-data.component.scss']
})
export class PresonalDataComponent {
services:any=[
  {icon:'fa-solid fa-code',title:'Back End',desc:'I specialize in using Node.js, Express.js, and MongoDB to build the server-side of web applications. I create APIs and handle data storage.'},//Web Development
  {icon:'fa-solid fa-code',title:'Front End',desc:'I specialize in Angular, To create engaging and user-friendly interfaces for web applications. To build dynamic and responsive components.'},
  {icon:'fa-solid fa-mobile-button',title:'Responsive Design',desc:'I specialize in create web applications that look great, To ensure that the design adapt smoothly to different screen sizes.'},
  {icon:'fa-solid fa-database',title:'Database Design',desc:'Create efficient well structured databases. To ensure smooth data flow and efficient integration between the application and the database.'},
  {icon:'fa-solid fa-bug',title:'Debugging',desc:'Tests the App functionality, performance, error handling and responses. Optimizes code, databases and servers to improve speed.'}, //Optimizes code, databases, servers and infrastructure to improve speed, efficiency, scalability and uptime. Caches queries, bulk loads data
  {icon:'fa-solid fa-toolbox',title:'Maintenance',desc:'Identifies, diagnoses and resolves any software bugs or defects. Works to reproduce reported issues and deploy fixes.'},
]

}
