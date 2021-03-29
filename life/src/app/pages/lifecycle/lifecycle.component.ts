import { ChildViewComponent } from './components';
import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, AfterViewChecked, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit:', this.viewChild.hero);
  }
  @ViewChild(ChildViewComponent) viewChild: ChildViewComponent;
  // This surrogate for real business logic sets the `comment`
  // private doSomething() {
  //   const c = this.viewChild.hero.length > 10 ? `That's a long name` : '';
  //   if (c !== this.comment) {
  //     // Wait a tick because the component's view has already been checked
  //     this.logger.tick_then(() => this.comment = c);
  //   }
  // }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked:', this.viewChild.hero);
  }

  ngOnInit() {
  }

}
