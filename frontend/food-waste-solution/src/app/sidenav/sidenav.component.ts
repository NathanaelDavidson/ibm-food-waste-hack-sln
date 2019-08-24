import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

interface NavOption {
  name: string;
  routerLink: string[] | string;
}



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Output() linkClicked = new EventEmitter<void>();
  buyerNavOptions: NavOption[] = [
    {name: 'home', routerLink: ['/buyers']}
  ];
  sellerNavOptions: NavOption[] = [
    {name: 'home', routerLink: ['/sellers']},
    {name: 'new shipment', routerLink: ['/sellers/shipments/create']}
  ];
  constructor(public auth: AuthService) { }
}
