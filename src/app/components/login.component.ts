import { Component, OnInit } from '@angular/core';
import { UserDetails } from './../models/UserDetails';

@Component({
    moduleId: module.id,
    selector: 'login-page',
    templateUrl: './../templates/login.html'
})
export class LoginComponent {
    user: UserDetails = null;
    constructor() {
        this.user = new UserDetails();
     }

    createAccount(): void {
        console.log("User Name: " + this.user.user_id + ", Password: " + this.user.password);
        this.user.user_id = "";
        this.user.password = "";
    }

    signIn(): void {
        alert("Successfully signed in");
    }
}