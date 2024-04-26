import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaCurso: string[] =['TypeScript', 'JavaScript', 'Java SE', 'C#', 'PHP']
  habilitar: boolean = true;

  setHabilitar(): void{
    this.habilitar = !this.habilitar;
  }

  getTextHabilitar(): string{
    return (this.habilitar==true)? 'Ocultar':'Mostrar';
  }
  constructor(){
    let i: number = 0;

    setTimeout(() => {
      while (i < 4) {
        console.log( "Block statement execution no." + i )
        i++;
    }
    }, 4000);
    console.log( "Sali..." )
  }
}
