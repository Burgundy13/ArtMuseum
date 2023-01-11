import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  edit = false;

  constructor(
    private service: ArtmuseumService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.exibitionId = params['id'];
      this.getExibition();
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
}
