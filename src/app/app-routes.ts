import { Routes } from "@angular/router";

import {
  ArtComponent,
  HomeComponent,
  PhotoComponent,
  ContactComponent,
} from "./pages";

export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "art",
    component: ArtComponent,
  },
  {
    path: "photo",
    component: PhotoComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
];
