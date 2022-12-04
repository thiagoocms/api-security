
import { Usuario } from '../home/usuario.model';

import { Router } from '@angular/router';
import { UsuarioService } from './../home/usuario.service';
import { Component, Input, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   user: boolean = true
   usuario:Usuario= {
    email:"",
    senha:""

  }
  constructor(private us:UsuarioService, private router:Router){

  }


 async login(){


      this.us.login(this.usuario).subscribe(lr => {
        this.router.navigate(['/home']);
        console.log(lr.token)

      },()=>{
        this.us.exibirMensagem('email ou senha invalidos... ')
        console.log('kk')
      })





  }
}
