import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.scss']
})
export class ChildViewComponent implements OnInit {
  hero = 'Magneta';
  constructor() { }

  ngOnInit() {
  }

}
