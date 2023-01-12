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

  artworks: Artwork[] = [];
  filteredArtworks: Artwork[] = [];
  exibitionArtworks: Artwork[] = [];

  edit = false;

  params = {
    sort: 'author',
    sortDirection: 'asc',
    filter: {
      author: '',
    },
  };

  constructor(
    private service: ArtmuseumService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.exibitionId = params['id'];
      this.getExibition();
      this.getArtworks();
      this.getExibitArtworks();
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

  onDone(): void {
    this.edit = false;
  }

  getExibitArtworks(): void {
    this.service.getExibitionAtrworks(this.exibitionId).subscribe({
      next: (response: Artwork[]) => {
        this.exibitionArtworks = response;
        this.filterArtworks();
      },
      error: (response: any) => {
        console.log('Error: ', response.statusText);
      },
    });
  }
  getArtworks(): void {
    this.service.getAllArtworks(this.params).subscribe({
      next: (response: Artwork[]) => {
        this.artworks = response;
        this.filterArtworks();
      },
      error: (response: any) => {
        console.log('Error: ', response.statusText);
      },
    });
  }
  filterArtworks(): void {
    this.filteredArtworks = this.artworks.filter((art: Artwork) => {
      if (this.exibitionId === 0) return;
      return art.exibition_id < 0;
    });
  }

  onSearch(author: string): void {
    this.params.filter.author = author;
    this.getArtworks();
  }
  onAddArtwork(artId: number): void {
    this.service.addArtwork(this.exibitionId, artId).subscribe({
      next: (response: Artwork) => {
        this.exibitionArtworks.push(response);
        this.getArtworks();
      },
      error: (response: any) => {
        console.log('Error: ', response.statusText);
      },
    });
  }
  onRemoveArtwork(artId: number): void {
    this.service.removeArtwork(this.exibitionId, artId).subscribe({
      next: (response: Artwork) => {
        this.artworks.push(response);
        this.getArtworks();
        this.getExibitArtworks();
      },
      error: (response: any) => {
        console.log('Error: ', response.statusText);
      },
    });
  }
}
