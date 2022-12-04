import { Observable } from 'rxjs';
import { Paciente } from './paciente.model';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  baseurl="http://localhost:5000/api/pacientes"
  constructor(private snack: MatSnackBar, private http:HttpClient) { }

  verMensagem(msg: string):void{
    this.snack.open(msg,'X',{
      duration:5000,
      horizontalPosition: 'center',
      verticalPosition:'top',

    })

  }
  criar(paciente:Paciente):Observable<Paciente>{
    console.log('aiiii')
    console.log(paciente);

    return this.http.post<Paciente>(this.baseurl ,paciente)
  }
  obterTodos():Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.baseurl )

  }
  obterPorId(id:string):Observable<Paciente>{
  const url = `${this.baseurl}/${id}`
    return this.http.get<Paciente>(url)
  }
  atualizar(paciente: Paciente):Observable<Paciente>{
  const url = `${this.baseurl}/${paciente.id}`
    return this.http.put<Paciente>(url,paciente)
  }
  deletar(id:string){
    const url = `${this.baseurl}/${id}`
    return this.http.delete(url)
  }


}
