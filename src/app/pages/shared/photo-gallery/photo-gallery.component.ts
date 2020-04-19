import { Component, Input, TemplateRef, HostListener } from "@angular/core";

import { BsModalRef, BsModalService } from "ngx-bootstrap/modal/";
import {
  faChevronLeft,
  faChevronRight,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export enum KEY {
  right = 39,
  left = 37,
}

@Component({
  selector: "photo-gallery",
  templateUrl: "./photo-gallery.component.html",
  styleUrls: ["./photo-gallery.component.scss"],
})
export class PhotoGalleryComponent {
  @Input()
  public photos: string[];
  public selectedPhotoUrl: string;
  public isModalShowing: boolean = false;
  public faChevronLeft: IconDefinition = faChevronLeft;
  public faChevronRight: IconDefinition = faChevronRight;
  public modalRef: BsModalRef;
  public get currentPhotoIndex(): number {
    return this.photos.indexOf(this.selectedPhotoUrl);
  }

  constructor(private modalService: BsModalService) {}

  public getPhotoStyles(photoUrl: string): {} {
    return {
      "background-image": "url(" + photoUrl + ")",
      "background-size": "cover",
      "background-position": "center",
    };
  }

  public viewImage(photoUrl: string, viewImageModal: TemplateRef<any>): void {
    this.selectedPhotoUrl = photoUrl;
    this.modalRef = this.modalService.show(viewImageModal);
    this.isModalShowing = true;
    this.modalService.onHide.subscribe(() => {
      this.isModalShowing = false;
    });
  }

  public navigateToImage(isNext?: boolean): void {
    const nextPhotoIndex: number = this.currentPhotoIndex + (isNext ? 1 : -1);
    if (nextPhotoIndex < this.photos.length && !!~nextPhotoIndex) {
      this.selectedPhotoUrl = this.photos[nextPhotoIndex];
    }
  }

  @HostListener("window:keyup", ["$event"])
  keyEvent({ keyCode }: KeyboardEvent) {
    if (
      keyCode === KEY.right &&
      this.currentPhotoIndex < this.photos?.length - 1
    ) {
      this.navigateToImage(true);
    }
    if (keyCode === KEY.left && this.currentPhotoIndex > 0) {
      this.navigateToImage();
    }
  }
}
