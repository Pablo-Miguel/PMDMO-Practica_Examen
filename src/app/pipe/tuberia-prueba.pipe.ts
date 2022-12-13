import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tuberiaPrueba'
})
export class TuberiaPruebaPipe implements PipeTransform {

  transform(value: String, ...args: String[]): String {

    let cadena = "";

    args.forEach(element => {
      cadena += element + " ";
    });

    return value.toUpperCase() + " -> " + cadena;
  }

}
