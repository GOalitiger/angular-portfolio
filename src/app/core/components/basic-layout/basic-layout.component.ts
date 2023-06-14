import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.scss'],
})
export class BasicLayoutComponent {
  fillerNav = Array.from({
    length: 100,
  }).map((elem, i) => `tab Nav ${elem} `);
}
