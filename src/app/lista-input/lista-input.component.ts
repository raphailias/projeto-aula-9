import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-input',
  templateUrl: './lista-input.component.html',
  styleUrls: ['./lista-input.component.css']
})
export class ListaInputComponent implements OnInit {
  
  @Output() cursoCadastrado= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  cadastrar(n,d){
    const curso = {nome:n,
                   descricao:d
    };
    this.cursoCadastrado.emit(curso);
  }

}
