import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  // standalone: true,
})
export class TopNavComponent {
  @Output() sideNav = new EventEmitter<Boolean>();
  outputToOpenSideNav() {
    this.sideNav.emit(true);
  }
}
