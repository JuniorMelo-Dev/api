import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  constructor() { }

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
