import { Router } from'@angular/router';
import { Component } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente.model';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent {
  paciente:Paciente={
    nome: '',
    healthInsuranceCardId: '',
    address: '',
    createdAt: new Date()
  }
  constructor(private router: Router, private ps:PacienteService){}

  add(): void{
    this.ps.criar(this.paciente).subscribe(()=>{
      this.ps.verMensagem('salvou...')
      this.router.navigate(['/home'])
    })

  }
  voltar():void{
    this.router.navigate(['/home'])
  }

}
