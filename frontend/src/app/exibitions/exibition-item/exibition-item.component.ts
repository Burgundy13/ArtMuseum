import { Component, Input, OnInit } from '@angular/core';
import { Exibition } from 'src/app/model/exibition';

@Component({
  selector: 'app-exibition-item',
  templateUrl: './exibition-item.component.html',
  styleUrls: ['./exibition-item.component.css'],
})
export class ExibitionItemComponent implements OnInit {
  @Input() exibition: Exibition = new Exibition();

  constructor() {}

  ngOnInit(): void {}
}
