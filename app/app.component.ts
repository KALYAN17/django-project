import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import { UserService } from "src/app/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit {
    userregister;
    constructor(private userService:UserService) {

    }
    ngOnInit() {
        this.userregister = {
            username: '',
            password: '',
            repeatpassword: '',
            email: '',

        };
    }
    register() {
        this.userService.register(this.userregister).subscribe(
            response => {
                alert("User" + this.userregister.username + "registered sucessfully!")
            },
            error => console.log("error in registration", error)
        );
    }
  
}
