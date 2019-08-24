import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output()
  menuButtonClick = new EventEmitter<void>();
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
