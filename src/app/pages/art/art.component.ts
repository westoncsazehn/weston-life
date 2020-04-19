import { Component, OnInit } from "@angular/core";

import { PreloaderService } from "src/app/services";

@Component({
  selector: "art",
  templateUrl: "./art.component.html",
  styleUrls: ["./art.component.scss"],
})
export class ArtComponent implements OnInit {
  public readonly title: string = "art";
  public readonly s3Url: string = "https://weston-life.s3.amazonaws.com/art/";
  public readonly headerImage: string = `${this.s3Url}monster-training.jpg`;
  public readonly photoPaths: string[] = [
    `${this.s3Url}batman-kid.jpg`,
    `${this.s3Url}batman-poly.jpg`,
    `${this.s3Url}birds-of-a-feather.jpg`,
    `${this.s3Url}charismatic-wolf.jpg`,
    `${this.s3Url}chilling-with-einstein.jpg`,
    `${this.s3Url}deer-words.jpg`,
    `${this.s3Url}farin-ink.jpg`,
    `${this.s3Url}flutter-by-ink.jpg`,
    `${this.s3Url}fun-box-color.jpg`,
    `${this.s3Url}girafferich.jpg`,
    `${this.s3Url}heart-of-hollow-color.jpg`,
    `${this.s3Url}howler.jpg`,
    `${this.s3Url}life-test-color.jpg`,
    `${this.s3Url}lip-syncopy-color.jpg`,
    `${this.s3Url}monster-training.jpg`,
    `${this.s3Url}pedaller-color.jpg`,
    `${this.s3Url}simply-motivated.jpg`,
    `${this.s3Url}slow-it-down.jpg`,
    `${this.s3Url}soda-city-blue.jpg`,
    `${this.s3Url}soda-city-red.jpg`,
    `${this.s3Url}the-beta-fish-ink.jpg`,
    `${this.s3Url}the-bonzai-color.jpg`,
    `${this.s3Url}the-daily-grind.jpg`,
    `${this.s3Url}touch-tone-color.jpg`,
  ];

  constructor(private preloaderService: PreloaderService) {}

  public ngOnInit(): void {
    this.preloaderService.setPrealoder(true);
    this.preloaderService.setPrealoder(false);
  }
}
