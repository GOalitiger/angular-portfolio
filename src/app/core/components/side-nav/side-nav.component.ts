import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  fillerNav = Array.from({
    length: 100,
  }).map((elem, i) => `tab Nav ${i} `);
}
