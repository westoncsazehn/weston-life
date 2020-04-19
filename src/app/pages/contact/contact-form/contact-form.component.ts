import { Component, OnInit, OnDestroy } from "@angular/core";

import { IFormFields } from "src/app/types";
import { ContactService } from "../contact.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit, OnDestroy {
  public readonly defaultContactForm: IFormFields = {
    name: "",
    email: "",
    message: "",
  };
  public contactFormModel = Object.assign({}, this.defaultContactForm);
  public isContactSubmitted: boolean = false;

  private $destroy: Subject<null> = new Subject<null>();

  constructor(private contactService: ContactService) {}

  public ngOnInit(): void {
    this.contactFormModel = Object.assign({}, this.defaultContactForm);
  }

  public ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }

  public submitContactForm(): void {
    console.log(this.contactFormModel);
    this.contactService
      .submitContactForm(this.contactFormModel)
      .pipe(takeUntil(this.$destroy))
      .subscribe(() => (this.isContactSubmitted = true));
  }
}
