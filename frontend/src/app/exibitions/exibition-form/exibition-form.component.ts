import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Exibition } from 'src/app/model/exibition';
import { MuseumLocation } from 'src/app/model/location';
import { ArtmuseumService } from 'src/app/service/artmuseum.service';

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

  locations: MuseumLocation[] = [];

  constructor(private service: ArtmuseumService, private router: Router) {}

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(): void {
    this.service.getAllLocations().subscribe({
      next: (response: MuseumLocation[]) => {
        this.locations = response;
      },
      error: (response: any) => {
        console.log('Error: ', response.statusText);
      },
    });
  }
  addExibition(): void {
    let location = this.locations.find(
      (elem: MuseumLocation) => elem._id == this.form.value.locationId
    );
    if (!this.form.valid || !location) {
      alert('Please fill in the form');
      return;
    }

    let exibit = new Exibition(this.form.value);
    exibit.location = location;

    this.service.postExibition(exibit).subscribe({
      next: (response: Exibition) => {
        this.router.navigate(['/exibitions']);
      },
      error: (response: any) => {
        console.log('Error: ', response.statusText);
      },
    });
  }
}
