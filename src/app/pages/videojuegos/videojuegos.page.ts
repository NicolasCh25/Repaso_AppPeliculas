import { Component, OnInit } from '@angular/core';
import {
  IonicModule
} from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VideojuegosService, Videojuego } from '../../services/videojuegos';


@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.page.html',
  styleUrls:['./videojuegos.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonicModule
  ]
})
export class VideojuegosPage implements OnInit {

  videojuegos: Videojuego[] = [];

  constructor(private videojuegosService: VideojuegosService) {}

  ngOnInit() {
    this.cargar();
  }

  ionViewWillEnter() {
    this.cargar();
  }

  async cargar() {
    this.videojuegos = await this.videojuegosService.listar();
  }

  async eliminar(id: number) {
    await this.videojuegosService.eliminar(id);
    await this.cargar();
  }
}