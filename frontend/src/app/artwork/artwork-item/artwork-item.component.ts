import { Component, Input, OnInit } from '@angular/core';
import { Artwork } from 'src/app/model/artwork';

@Component({
  selector: 'app-artwork-item',
  templateUrl: './artwork-item.component.html',
  styleUrls: ['./artwork-item.component.css'],
})
export class ArtworkItemComponent implements OnInit {
  @Input() artwork: Artwork = new Artwork();

  constructor() {}

  ngOnInit(): void {}
}
