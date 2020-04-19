import { Component, OnInit } from "@angular/core";
import { Routes, ActivatedRoute } from "@angular/router";

import { faBolt } from "@fortawesome/free-solid-svg-icons";

import { routes } from "../app-routes";

@Component({
  selector: "navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  public currentRoute: string = "";
  public isHome: boolean = false;
  public title: string = "weston sazehn";
  public faBolt = faBolt;
  public readonly links: Routes = routes;
  public readonly invalidLinks: string[] = ["home", ""];

  constructor(private activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    const { path } = this.activatedRoute.snapshot.url[0];
    this.isHome = this.invalidLinks.includes(path);
    this.currentRoute = path;
  }

  public isValidLink(link: string): boolean {
    return !this.invalidLinks.includes(link);
  }
}
