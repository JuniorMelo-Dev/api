import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  //url base
  url = "http://localhost/api/php/";

  vetor:Curso[] | undefined;

  constructor(private http:HttpClient) { }

  ngOnInit() { }

  cadastro():void {
    alert("Cadastrando")
  }

  selecao():void {
    alert("Selecionando")
  }

  alterar():void {
    alert("Alterando")
  }

  remover():void {
    alert("Removendo")
  }

}
