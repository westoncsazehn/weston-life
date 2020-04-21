import { Component, OnInit } from "@angular/core";
import { Routes, ActivatedRoute } from "@angular/router";

import { faBars, faBolt } from "@fortawesome/free-solid-svg-icons";

import { routes } from "../app-routes";

@Component({
  selector: "navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  public currentRoute: string = "";
  public isHome: boolean = false;
  public isMobile: boolean = false;
  public isMobileOpen: boolean = false;
  public title: string = "weston sazehn";
  public faBolt = faBolt;
  public faBars = faBars;
  public readonly links: Routes = routes;
  public readonly invalidLinks: string[] = ["home", ""];

  private readonly maxMobileWidth: number = 576;

  constructor(private activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    const { path } = this.activatedRoute.snapshot.url[0];
    this.isHome = this.invalidLinks.includes(path);
    this.currentRoute = path;
    this.isMobile = window.innerWidth < this.maxMobileWidth;
    if (!this.isMobile) {
      this.isMobileOpen = false;
    }
  }

  public isValidLink(link: string): boolean {
    return !this.invalidLinks.includes(link);
  }

  public updateMobileOpen(): void {
    if (this.isMobile) {
      this.isMobileOpen = !this.isMobileOpen;
    }
  }
}
