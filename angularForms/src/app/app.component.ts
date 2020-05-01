import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myReactiveForm: FormGroup;

    constructor() {
    this._createForm()
  }

  private _createForm() {
    this.myReactiveForm = new FormGroup({
      fname: new FormControl(null)
      });
  }
}
