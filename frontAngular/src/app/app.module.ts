import { DeletarComponent } from './home/deletar/deletar.component';
import { AtualizarComponent } from './home/atualizar/atualizar.component';

import { CriarComponent } from './home/criar/criar.component';
import { HomeComponent } from './home/home/home.component';
import { appRoutingModule } from './app.routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ObserversModule } from '@angular/cdk/observers';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CriarComponent,
    AtualizarComponent,
    DeletarComponent


  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    appRoutingModule,
    HttpClientModule,
    FormsModule,
    ObserversModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
