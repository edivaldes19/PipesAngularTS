import { Component } from '@angular/core'
@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {
  public nombre: string = 'Manuel'
  public genero: string = 'masculino'
  public invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  public clientes: string[] = ['Maria', 'Pedro', 'Josue', 'Eduardo', 'Manuel']
  public clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }
  // KeyValue Pipe
  public persona = {
    nombre: 'Manuel',
    edad: 22,
    direccion: 'Uruapan, México'
  }
  // JsonPipe
  public heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]
  // Async Pipe
  public peticionWeb = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('El proceso asíncrono ha finalizado.')
    }, 3500)
  })
  cambiarCliente() {
    this.nombre = 'Zulema'
    this.genero = 'femenino'
  }
  borrarCliente() {
    this.clientes.pop()
  }
}