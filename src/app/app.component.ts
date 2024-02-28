import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupForm!: NgForm;
  defaultEmail: string = 'default@gmail.com';
  answer: string = '';
  genders: string[] = ['male', 'female'];

  inputValue: Event;

  user: User
    = {
    username: '',
    email: '',
    secretQuestion: '',
    gender: '',
    answer: ''
  }

  submitted:boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // $ Using The SetValue Property
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: '',
    //   questionAnswer: '',
    //   gender: '',
    // })

    // # Using the patchValue Property to set the default Value
    this.signupForm.form.patchValue({
      userData: {
        username: this.signupForm.form
                  .controls
                  .userData
                  .value['username'] ? 
                  this.signupForm.form
                  .controls
                  .userData
                  .value['username'] : suggestedName,
      }
    })
  }

  onSubmit = (form: NgForm) => {
    this.submitted = true;
    this.user.username 
    = this.signupForm.value.userData.username;
    this.user.email 
    = this.signupForm.value.userData.email;
    this.user.gender 
    = this.signupForm.value.gender;
    this.user.secretQuestion 
    = this.signupForm.value.secret;
    this.user.answer 
    = this.signupForm.value.questionAnswer;

    this.signupForm.reset({
      userData: {
        username: '',
        email: ''
      },
      secret: '',
      questionAnswer: '',
      gender: '',
    })
  }
}