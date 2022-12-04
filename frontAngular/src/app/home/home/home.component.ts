import { appRoutingModule } from './../../app.routing.module';
import { PacienteService } from './../paciente.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Paciente } from '../paciente.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pacientes:any = null
  displayedColumns = ['id','name','address','createdAt','healthInsuranceCardId','action']
  constructor(private ps: PacienteService, private router: Router){}
  ngOnInit(): void {
    this.ps.obterTodos().subscribe(pss=>{
      console.log(pss)
      this.pacientes = pss
    })
  }
  pageCriar(){
    this.router.navigate(['/home/criar'])

  }

  
  logoff(){

  }

}
