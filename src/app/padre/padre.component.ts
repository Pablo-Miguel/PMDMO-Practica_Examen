import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  salida: String = "Esperando mensaje";

  constructor() { }

  ngOnInit(): void {
  }

  cambiarTexto(texto: String){
    this.salida = texto;
  }

}
