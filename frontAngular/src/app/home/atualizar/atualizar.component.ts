import { Paciente } from './../paciente.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PacienteService } from './../paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit{

  paciente:any
  constructor(private router:Router, private ps:PacienteService, private snack: MatSnackBar,private route:ActivatedRoute){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if(typeof id == "string"){
      this.ps.obterPorId(id).subscribe(p=>{
        this.paciente = p
        this.ver(p)
      })


    }else{
      this.ps.verMensagem('paciente não encontrado')
      this.router.navigate(['/home'])
    }


  }
  atualizar() {
    return this.ps.atualizar(this.paciente).subscribe(()=>{
      this.router.navigate(['/home'])
      this.ps.verMensagem(`paciente ${this.paciente.nome} atualizado...`)
    })
    }
  ver(pp:Paciente){
    console.log(pp);

  }

  voltar(){
    this.router.navigate(['/home'])
  }

}
