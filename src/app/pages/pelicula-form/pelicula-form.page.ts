import { Component, OnInit } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import {
  PeliculasService,
  Pelicula
} from '../../services/peliculas';

@Component({
  selector: 'app-pelicula-form',
  templateUrl: './pelicula-form.page.html',
  styleUrls: ['./pelicula-form.page.scss'],
  standalone: true,
  imports: [
    FormsModule,

    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,

    IonItem,
    IonLabel,
    IonInput,
    IonButton
  ]
})
export class PeliculaFormPage implements OnInit {

  id?: number;

  pelicula: Pelicula = {

    titulo: '',
    director: '',
    precio: 0,
    stock: 0,
    genero: '',
    imagen_url: '',
    video_url: '',
    audio_url: ''

  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peliculasService: PeliculasService
  ) {}

  async ngOnInit() {

    const idParam =
      this.route.snapshot.paramMap.get('id');

    if (idParam) {

      this.id = Number(idParam);

      this.pelicula =
        await this.peliculasService.obtenerPorId(this.id);
    }
  }

  async guardar() {

    if (this.id) {

      await this.peliculasService.actualizar(
        this.id,
        this.pelicula
      );

    } else {

      await this.peliculasService.crear(
        this.pelicula
      );
    }

    this.router.navigate(['/peliculas']);
  }
}