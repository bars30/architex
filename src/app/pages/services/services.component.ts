import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ServicesComponent {
  cont1: boolean = false;
  cont2: boolean = true;
  cont3: boolean = false;
  cont4: boolean = false;
  cont5: boolean = false;
  cont6: boolean = false;

  change(value: string){
    console.log(value);
    if(value == '1'){
      this.cont1 = !this.cont1
    } else if(value == '2'){
      this.cont2 = !this.cont2
    } else if(value == '3'){
      this.cont3 = !this.cont3
    } else if(value == '4'){
      this.cont4 = !this.cont4
    } else if(value == '5'){
      this.cont5 = !this.cont5
    } else if(value == '6'){
      this.cont6 = !this.cont6
    }
  }
}
