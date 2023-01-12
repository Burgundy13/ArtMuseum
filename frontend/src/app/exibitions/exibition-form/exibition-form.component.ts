import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exibition-form',
  templateUrl: './exibition-form.component.html',
  styleUrls: ['./exibition-form.component.css'],
})
export class ExibitionFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    locationId: new FormControl(0),
  });

  constructor() {}

  ngOnInit(): void {}
}
