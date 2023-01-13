import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasRef } from '@ng-bootstrap/ng-bootstrap';
import { Artwork } from 'src/app/model/artwork';

@Component({
  selector: 'app-artwork-item',
  templateUrl: './artwork-item.component.html',
  styleUrls: ['./artwork-item.component.css'],
})
export class ArtworkItemComponent implements OnInit {
  @Input() artwork: Artwork = new Artwork();

  constructor(private offcanvasService: NgbOffcanvas) {}

  ngOnInit(): void {}

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
}
