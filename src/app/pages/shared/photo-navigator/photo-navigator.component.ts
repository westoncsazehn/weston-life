import { Component, Input, Output, EventEmitter } from "@angular/core";

import {
  faChevronLeft,
  faChevronRight,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

import { NavCategory } from "src/app/types";

@Component({
  selector: "photo-navigator",
  templateUrl: "./photo-navigator.component.html",
  styleUrls: ["./photo-navigator.component.scss"],
})
export class PhotoNavigatorComponent {
  @Input()
  public navCategories: NavCategory[];
  @Input()
  public activeCategory: NavCategory;
  @Output()
  public viewNewCategory: EventEmitter<string> = new EventEmitter<string>();

  public faChevronLeft: IconDefinition = faChevronLeft;
  public faChevronRight: IconDefinition = faChevronRight;
  public basePhotoPath: string = "https://weston-life.s3.amazonaws.com/photos/";
  public categoryWidth: number = 85;

  public get activeIndex(): number {
    return this.navCategories.findIndex((category) => category.active);
  }

  public getNavigatorListStyle(): { width: string } {
    return { width: `${this.navCategories.length * this.categoryWidth}px` };
  }

  public getPhotoStyles({ path, image }: NavCategory): {} {
    return {
      "background-image": "url(" + this.basePhotoPath + path + image + ")",
      "background-size": "cover",
      "background-position": "center",
    };
  }

  public getActiveCategoryTitle(): string {
    return this.activeCategory.path.replace(/-/g, " ");
  }

  public viewCategory({ path }: NavCategory): void {
    this.viewNewCategory.emit(path);
  }

  public navigateToCategory(isNext?: boolean): void {
    const activeCategoryIndex: number = this.activeIndex + (isNext ? 1 : -1);
    if (
      activeCategoryIndex < this.navCategories.length &&
      !!~activeCategoryIndex
    ) {
      this.viewCategory(this.navCategories[activeCategoryIndex]);
    }
  }
}
