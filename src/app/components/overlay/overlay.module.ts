import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './overlay.component';
import { OverlayLogoComponent } from './overlay-logo/overlay-logo.component';
import { OverlayPagingComponent } from './overlay-paging/overlay-paging.component';
import { OverlaySubTitleComponent } from './overlay-sub-title/overlay-sub-title.component';
import { OverlayTitleComponent } from './overlay-title/overlay-title.component';



@NgModule({
  declarations: [
    OverlayComponent,
    OverlayLogoComponent,
    OverlayPagingComponent,
    OverlaySubTitleComponent,
    OverlayTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OverlayComponent
  ]
})
export class OverlayModule { }
