import { Injectable } from '@angular/core';

import { createClient } from '@supabase/supabase-js';

import { environment } from 'src/environments/environment';

export interface Pelicula {
  id?: number;
  titulo: string;
  director: string;
  precio: number;
  stock: number;
  genero: string;
  imagen_url: string;
  video_url: string;
  audio_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  supabase = createClient(
    environment.supabaseUrl,
    environment.supabaseKey
  );

  tabla = 'peliculas';

  async listar() {
    const { data, error } = await this.supabase
      .from(this.tabla)
      .select('*');

    if (error) throw error;

    return data as Pelicula[];
  }

  async obtenerPorId(id: number) {
    const { data, error } = await this.supabase
      .from(this.tabla)
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    return data as Pelicula;
  }

  async crear(pelicula: Pelicula) {
    const { error } = await this.supabase
      .from(this.tabla)
      .insert([pelicula]);

    if (error) throw error;
  }

  async actualizar(id: number, pelicula: Pelicula) {
    const { error } = await this.supabase
      .from(this.tabla)
      .update(pelicula)
      .eq('id', id);

    if (error) throw error;
  }

  async eliminar(id: number) {
    const { error } = await this.supabase
      .from(this.tabla)
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
}