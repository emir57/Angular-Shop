import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  copyright=new Date().getFullYear()
  uyelikBilgisi!:FormGroup
  user:User= new User()

  constructor(
    private fb:FormBuilder,
    private accountService:AccountService
    ) {
    this.uyelikBilgisi = this.fb.group({
      userName:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  login(){
    if(this.uyelikBilgisi.valid){
      this.user = Object.assign({},this.uyelikBilgisi.value)
      this.accountService.login(this.user)
      
    }
  }

}
