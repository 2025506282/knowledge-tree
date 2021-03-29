import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleComponent } from './lifecycle.component';
import { LifecycleRoutingModule } from './lifecycle-routing.module';
import { ChildViewComponent } from './components';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LifecycleRoutingModule
  ],
  declarations: [LifecycleComponent,ChildViewComponent]
})
export class LifecycleModule { }
