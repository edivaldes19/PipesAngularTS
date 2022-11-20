import { Component } from '@angular/core'
@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {
  public nombreLower: string = 'manuel'
  public nombreUpper: string = 'MANUEL'
  public nombreCompleto: string = 'mAnUeL vAlDeS'
  public fecha: Date = new Date()
}