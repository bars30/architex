import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class ToolbarComponent implements OnInit {
  @ViewChild('n') elem!: ElementRef<any>;
  rotateValue: boolean = false;
  value: number = 0;
  colorValue: boolean = false;

  ngOnInit(): void {
    this.setScrollVar();
    window.addEventListener('scroll', () => this.setScrollVar()); // Use arrow function to preserve 'this'
  }

  setScrollVar(): void {
    const htmlElement = document.documentElement;
    const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
    htmlElement.style.setProperty('--scroll', '' + (Math.min(percentOfScreenHeightScrolled * 100, 1000)));
    this.value = +(htmlElement.style.getPropertyValue('--scroll'));
    this.rotateValue = this.value > 6 ;
    if(230 < Math.min(percentOfScreenHeightScrolled * 100, 1000) &&
      Math.min(percentOfScreenHeightScrolled * 100, 1000) < 268  ){
        console.log('Yes the 235 < percentOfScreenHeightScrolled < 268');
        this.colorValue = true
    } else {
      this.colorValue = false
    }
  }

  log() {
    // This method can be used for debugging purposes if needed
  }
}
