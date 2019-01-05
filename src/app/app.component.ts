import { Component } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre = 'Fabian';

  arreglo = [0,1,2,3,4,5];

  PI = Math.PI;

  PI2 = 3.1415;

  a = 0.234;

  current = 1200.12;

  heroe = {
    nombre: "Logan",
    clave: "Wolvwrine",
    edad: 300,
    direccion:{
      casa: 2,
      telefono: '1234566-123'
    }
  }

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('Llego la data'),3500);
  })
}
