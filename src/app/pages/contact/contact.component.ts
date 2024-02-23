import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  showText: boolean = false;
  reactiveForm: FormGroup = new FormGroup({
    full_name: new FormControl('Name Surname', [Validators.required]),
    email: new FormControl('________@___.__', [Validators.required, Validators.email]),
    message: new FormControl('Enter your message', [Validators.required])
  })
  onFormSubmitted(){
    
    console.log(this.reactiveForm);
    console.log(this.reactiveForm.valid);
    
  }
  showTextFunc(){
    if(!this.reactiveForm.valid){
      this.showText = !this.showText
    }
  }

}
