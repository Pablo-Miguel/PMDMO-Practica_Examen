import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() entrada!: String;
  @Output() salida: EventEmitter<String> = new EventEmitter<String>();
  
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('title') element!: ElementRef;

  llamaEvento(texto: String){
    this.salida.emit(texto);
    this.element.nativeElement.innerHTML = "Adios";
  }

}
