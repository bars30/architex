import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  f1: boolean = true;
  f2: boolean = false;
  f3: boolean = false;
  f4: boolean = false;
  f5: boolean = false;
  f6: boolean = false;
  imgSrc: string = '/assets/img/hdesign/nk6.jpeg';
  text: string = `  With years of experience and a passion for innovation, our team brings 
  expertise and creativity to every project.
  `

  ngOnInit(): void {
    this.setScrollVar();
    window.addEventListener('scroll', this.setScrollVar);
  }
  
  setScrollVar(): void {
    const htmlElement = document.documentElement;
    const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
    htmlElement.style.setProperty('--scroll', '' + (Math.min(percentOfScreenHeightScrolled * 100, 1000)));
    console.log(Math.min(percentOfScreenHeightScrolled * 100, 1000));
    console.log('---------------------------------------------');

    if(284< Math.min(percentOfScreenHeightScrolled * 100, 1000) 
      && Math.min(percentOfScreenHeightScrolled * 100, 1000)<438){
        htmlElement.style.setProperty('--scroll-for-img', '' + 
        Math.min(percentOfScreenHeightScrolled * 100, 1000))
    }

    if(58< Math.min(percentOfScreenHeightScrolled * 100, 1000) 
      && Math.min(percentOfScreenHeightScrolled * 100, 1000)<105){
        htmlElement.style.setProperty('--scroll-for-more-work', '' + 
        Math.min(percentOfScreenHeightScrolled * 100, 1000))
    }

  }
  hover(i: string){
    if(i == 'f1'){
      this.imgSrc = '/assets/img/hdesign/nk6.jpeg',
      this.text = `With years of experience and a passion for innovation, our team brings 
      expertise and creativity to every project.`;
      this.f1 = !this.f1
      this.f2 = false;
      this.f3 = false;
      this.f4 = false;
      this.f5 = false;

    } else if(i == 'f2'){
      this.imgSrc = '/assets/img/hdesign/nk1.jpeg',
      this.text = `        We understand that every client is unique. That's 
      why we tailor our designs to your specific needs, 
      ensuring a personalized experience from start to finish.`;
      this.f2 = !this.f2;
      this.f1 = false;
      this.f3 = false;
      this.f4 = false;
      this.f5 = false;
    } else if(i == 'f3'){
      this.imgSrc = '/assets/img/hdesign/nk3.jpeg',
      this.text = `From concept to completion, we pay meticulous attention to every detail, 
      ensuring flawless execution and stunning results.`;
      this.f3 = !this.f3;
      this.f1 = false;
      this.f2 = false;
      this.f4 = false;
      this.f5 = false;
    } else if(i == 'f4'){
      this.imgSrc = '/assets/img/hdesign/nk4.jpeg',
      this.text = `At Architex, we thrive on pushing boundaries and thinking outside the box.
      Our innovative design solutions
      transform spaces into works of art that inspire and captivate.`;
      this.f4 = !this.f4;
      this.f2 = false;
      this.f3 = false;
      this.f1 = false;
      this.f5 = false;
    } else if(i == 'f5'){
      this.imgSrc = '/assets/img/hdesign/nk5.jpeg',
      this.text = `      Your vision is our priority. We take the time to listen to your needs, preferences, 
      and aspirations, ensuring that every design reflects your unique style and personality.`;
      this.f5 = !this.f5;
      this.f2 = false;
      this.f3 = false;
      this.f4 = false;
      this.f1 = false;
    }
    console.log(i);
    
  }
}
