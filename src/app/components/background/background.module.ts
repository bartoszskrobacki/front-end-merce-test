import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './background.component';
import { GlassBackgroundComponent } from './glass-background/glass-background.component';
import { SquareBackgroundComponent } from './square-background/square-background.component';



@NgModule({
  declarations: [
    BackgroundComponent,
    GlassBackgroundComponent,
    SquareBackgroundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackgroundComponent
  ]
})
export class BackgroundModule { }
