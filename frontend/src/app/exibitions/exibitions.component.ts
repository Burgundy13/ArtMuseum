import { Component, OnInit } from '@angular/core';
import { Exibition } from '../model/exibition';
import { ArtmuseumService } from '../service/artmuseum.service';

@Component({
  selector: 'app-exibitions',
  templateUrl: './exibitions.component.html',
  styleUrls: ['./exibitions.component.css'],
})
export class ExibitionsComponent implements OnInit {
  exibitions: Exibition[] = [];

  constructor(private service: ArtmuseumService) {}

  ngOnInit(): void {
    this.getExibitions();
  }

  getExibitions(): void {
    this.service.getAllExibitions().subscribe({
      next: (response: Exibition[]) => {
        this.exibitions = response;
      },
      error: (response: any) => {
        console.log('Error :', response.statusText);
      },
    });
  }
}
