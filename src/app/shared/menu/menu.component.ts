import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] = []
  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
          }]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog'
      }
    ]
  }
}