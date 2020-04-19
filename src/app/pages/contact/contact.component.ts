import { Component, OnInit } from "@angular/core";

import { PreloaderService } from "src/app/services";

@Component({
  selector: "contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  constructor(private preloaderService: PreloaderService) {}

  public ngOnInit(): void {
    this.preloaderService.setPrealoder();
  }
}
