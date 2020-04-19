import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Subject, Observable, of } from "rxjs";

import { IFormFields } from "src/app/types";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  private readonly formSpreeUrl: string = "https://formspree.io/xgeljkdq";

  constructor(private http: HttpClient) {}

  public submitContactForm(form: IFormFields): Observable<any> {
    const formParams = {
      name: form.name,
      _replyto: form.email,
      message: form.message,
    };
    return this.http.post(this.formSpreeUrl, formParams);
  }
}
