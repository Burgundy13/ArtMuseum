import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Artwork } from 'src/app/model/artwork';
import { Exibition } from 'src/app/model/exibition';
import { ArtmuseumService } from 'src/app/service/artmuseum.service';

@Component({
  selector: 'app-exibition-details',
  templateUrl: './exibition-details.component.html',
  styleUrls: ['./exibition-details.component.css'],
})
export class ExibitionDetailsComponent implements OnInit {
  exibition: Exibition = new Exibition();
  exibitionId: number = 0;

  exibitionArtworks: Artwork[] = [];
  artworks: Artwork[] = [];

  edit = false;

  constructor(
    private service: ArtmuseumService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.exibitionId = params['id'];
      this.getExibition();
      this.getExibitArtworks();
      this.getArtworks();
    });
  }

  getExibition(): void {
    this.service.getOneExibition(this.exibitionId).subscribe({
      next: (response: Exibition) => {
        this.exibition = response;
      },
      error: (response: any) => {
        console.log('Error: ', response.statusText);
      },
    });
  }

  onEditChange(): void {
    this.edit = true;
  }

  getExibitArtworks(): void {
    this.service.getExibitionAtrworks(this.exibitionId).subscribe({
      next: (response: Artwork[]) => {
        this.exibitionArtworks = response;
      },
      error: (response: any) => {
        console.log('Error: ', response.statusText);
      },
    });
  }
  getArtworks(): void {
    this.service.getAllArtworks().subscribe({
      next: (response: Artwork[]) => {
        this.artworks = response;
      },
      error: (response: any) => {
        console.log('Error: ', response.statusText);
      },
    });
  }
}
