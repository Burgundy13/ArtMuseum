import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Exibition } from 'src/app/model/exibition';

@Component({
  selector: 'app-exibition-item',
  templateUrl: './exibition-item.component.html',
  styleUrls: ['./exibition-item.component.css'],
})
export class ExibitionItemComponent implements OnInit {
  @Input() exibition: Exibition = new Exibition();

  @Input() edit = false;

  @Output() editChange: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onEditClicked(): void {
    this.editChange.emit(true);
  }
}
