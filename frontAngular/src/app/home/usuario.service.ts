import { loginResponse } from './loginResponse.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from './usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  url = 'http://localhost:5000/api/usuarios/login'
  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  login(usuario: Usuario):Observable<loginResponse>{

    return this.http.post<loginResponse>(this.url, usuario)
  }
  exibirMensagem(msg: string):void{
    this.snack.open(msg,'X',{
      duration:5000,
      horizontalPosition: 'center',
      verticalPosition:'top',

    })
  }
}
