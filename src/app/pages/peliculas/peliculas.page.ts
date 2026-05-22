import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

import {
  PeliculasService,
  Pelicula
} from '../../services/peliculas';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonicModule
  ]
})
export class PeliculasPage implements OnInit {

  peliculas: Pelicula[] = [];

  constructor(
    private peliculasService: PeliculasService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {

    this.cargar();

  }

  ionViewWillEnter() {

    this.cargar();

  }

  async cargar() {

    this.peliculas =
      await this.peliculasService.listar();

  }

  async eliminar(id: number) {

    await this.peliculasService.eliminar(id);

    await this.cargar();

  }

  obtenerVideoSeguro(url: string): SafeResourceUrl {

    return this.sanitizer
      .bypassSecurityTrustResourceUrl(url);

  }

}