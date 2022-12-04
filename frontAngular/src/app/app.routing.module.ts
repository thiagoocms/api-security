import { CriarComponent } from './home/criar/criar.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AtualizarComponent } from './home/atualizar/atualizar.component';
import { DeletarComponent } from './home/deletar/deletar.component';


const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path:"home",
    component: HomeComponent,
  },
  {
    path:"home/criar",
    component: CriarComponent
  },
  {
    path:"home/atualizar/:id",
    component: AtualizarComponent
  },
  {
    path:"home/deletar/:id",
    component: DeletarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class appRoutingModule{

}
