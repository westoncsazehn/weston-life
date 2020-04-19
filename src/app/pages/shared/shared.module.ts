import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ModalModule } from "ngx-bootstrap/modal";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { PreloaderComponent } from "./preloader";
import { PhotoHeaderComponent } from "./photo-header";
import { PhotoGalleryComponent } from "./photo-gallery";
import { PhotoNavigatorComponent } from "./photo-navigator";

@NgModule({
  declarations: [
    PreloaderComponent,
    PhotoHeaderComponent,
    PhotoGalleryComponent,
    PhotoNavigatorComponent,
  ],
  exports: [
    PreloaderComponent,
    PhotoHeaderComponent,
    PhotoGalleryComponent,
    PhotoNavigatorComponent,
  ],
  imports: [CommonModule, ModalModule.forRoot(), FontAwesomeModule],
})
export class SharedModule {}
