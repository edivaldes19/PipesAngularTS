import { Component } from '@angular/core'
import { Color, Heroe } from '../../interfaces/ventas.interface'
@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent {
  public isUpper: boolean = true
  public orderBy: string = ''
  public heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ]
  enMayusculas() {
    this.isUpper = !this.isUpper
  }
  changeOrder(value: string) {
    this.orderBy = value
  }
}