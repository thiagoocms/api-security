import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {
  paciente:any
  constructor(private router:Router, private ps:PacienteService,private route:ActivatedRoute){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if(typeof id == "string"){
      this.ps.obterPorId(id).subscribe(p=>{
        this.paciente = p
        this.deletar()

      })


    }else{
      this.ps.verMensagem('paciente não encontrado')
      this.router.navigate(['/home'])
    }


  }
  deletar(){
    return this.ps.deletar(this.paciente.id).subscribe(()=>{
      this.ps.verMensagem('paciente apagado...')
      this.router.navigate(['/home'])
    })
  }

}
