import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  logoutState: 'success' | 'failure';
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.logout().subscribe(_ => {
      this.logoutState = 'success';
    }, _ => {
      this.logoutState = 'failure';
    });
  }

}
