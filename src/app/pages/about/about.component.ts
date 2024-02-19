import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  experts: number = 0;
  experience: number = 0;
  projects: number = 0;
  repeatClients: number = 0;

  clients: number = 0;
  square: number = 0;
  project: number = 0;
  budget: number = 0;

  ngOnInit(){
    setInterval(()=>{
      if(this.clients < 95){
        this.clients = ++this.clients
      }
      
      if(this.project < 80){
        this.project = ++this.project
      }
      
      if(this.experts < 56){
        this.experts = ++this.experts
      }
      
      if(this.repeatClients < 71){
        this.repeatClients = ++this.repeatClients
      }
    }, 70)
    setInterval(()=>{
      if(this.projects < 501){
        this.projects = ++this.projects
      }
    }, 10)
    setInterval(()=>{
      if(this.square < 5){
        this.square = ++this.square
      }
      if(this.budget < 10){
        this.budget = ++this.budget
      }
      if(this.experience < 26){
        this.experience = ++this.experience
      }
    }, 220)
  }

}
