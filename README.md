# 🎬 CineFlix - Aplicación de Películas

Aplicación móvil desarrollada con Ionic + Angular + Supabase enfocada en la gestión y visualización de películas.

---

# 🚀 Funcionalidades Implementadas

## 1️⃣ Reproducción de Video

Se integró la visualización de trailers mediante enlaces de YouTube embebidos directamente dentro de la aplicación utilizando `iframe`.

✅ Visualización de trailers sin salir de la app.

---

## 2️⃣ Reproducción de Audio

Se implementó la reproducción de audios relacionados con cada película usando la etiqueta HTML5 `<audio>`.

✅ Reproducción multimedia dentro de la aplicación.

---

## 3️⃣ Supabase Storage

Se utilizó Supabase Storage para almacenar:

- Posters de películas
- Archivos de audio

Los recursos son consumidos mediante URLs públicas desde Supabase.

✅ Integración completa con almacenamiento en la nube.

---

## 4️⃣ AndroidManifest.xml

El archivo `AndroidManifest.xml` es el archivo principal de configuración de Android.

Sirve para:

- Definir permisos de la aplicación
- Configurar acceso a internet
- Registrar actividades
- Configurar componentes Android
- Definir comportamiento general de la aplicación

Ubicación:

```plaintext
android/app/src/main/AndroidManifest.xml
