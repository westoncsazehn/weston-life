import { Component, OnInit } from "@angular/core";

import { NavCategory } from "src/app/types";
import { PhotoService } from "./photo.service";

@Component({
  selector: "app-photo",
  templateUrl: "./photo.component.html",
  styleUrls: ["./photo.component.scss"],
})
export class PhotoComponent implements OnInit {
  public locations: NavCategory[] = [
    {
      path: "arizona",
      image: "/grand-canyon-between-tree-branches.jpg",
      active: true,
    },
    {
      path: "colorado",
      image: "/garden-of-the-gods-panorama.jpg",
    },
    {
      path: "new-mexico",
      image: "/carlsbad-caverns-drips.jpg",
    },
    // {
    //   path: "north-carolina",
    //   image: "/grand-canyon-between-tree-branches.jpg",
    // },
    // {
    //   path: "south-carolina",
    //   image: "/grand-canyon-between-tree-branches.jpg",
    // },
    // {
    //   path: "virginia",
    //   image: "/grand-canyon-between-tree-branches.jpg",
    // },
    //   path: "tennessee",
    //   image: "/grand-canyon-between-tree-branches.jpg",
    // },
    {
      path: "utah",
      image: "/angels-landing-bottom-view-panorama.jpg",
    },
  ];
  public activeCategory: NavCategory = this.locations[0];
  public photos: string[] = [];

  private readonly s3Url: string =
    "https://weston-life.s3.amazonaws.com/photos/";

  constructor(private photoService: PhotoService) {}

  public ngOnInit(): void {
    this.photos = this.photoService.getPhotosFromCategory(
      this.activeCategory.path
    );
  }

  public getActiveHeaderImage(): string {
    return this.s3Url + this.activeCategory.path + this.activeCategory.image;
  }

  public viewCategory(category: string): void {
    this.locations.forEach(
      (location) => (location.active = category === location.path)
    );
    this.activeCategory = this.locations.find(
      (location) => location.path === category
    );
    this.photos = this.photoService.getPhotosFromCategory(
      this.activeCategory.path
    );
  }
}
