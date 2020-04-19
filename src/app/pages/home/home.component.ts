import { Component, OnInit } from "@angular/core";

import { faBolt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public faBolt = faBolt;
  public readonly homeImageUrl: string =
    "/assets/images/ws-life-home-photo.jpg";

  constructor() {}

  ngOnInit(): void {}
}
