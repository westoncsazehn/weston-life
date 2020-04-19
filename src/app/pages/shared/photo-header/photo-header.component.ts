import { Component, Input } from "@angular/core";

@Component({
  selector: "photo-header",
  templateUrl: "./photo-header.component.html",
  styleUrls: ["./photo-header.component.scss"],
})
export class PhotoHeaderComponent {
  @Input()
  public headerImage: string;
  @Input()
  public title: string;

  public getPhotoStyles(): {} {
    return {
      "background-image": "url(" + this.headerImage + ")",
    };
  }
}
