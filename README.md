# Proyecto Consulta Veterinaria

Este proyecto es una página web que permite a los usuarios ingresar información sobre consultas veterinarias, como los datos del dueño, la mascota y el motivo de la consulta. Al enviar el formulario, los datos se muestran dinámicamente en la página.

## Demo

Puedes ver el demo en vivo en el siguiente enlace:  
[Ver Demo](https://mr-gantiva.github.io/lista-de-animales/)

## Descripción

La página utiliza HTML, CSS (con Bootstrap), y JavaScript para crear una interfaz interactiva. El formulario captura los siguientes datos:
- Nombre del dueño
- Número de teléfono
- Dirección de residencia
- Nombre de la mascota
- Tipo de mascota (Perro, Gato, Conejo)
- Motivo de la consulta

### Estructura del Proyecto

- **HTML**: La estructura principal de la página, que incluye el formulario de consulta veterinaria.
- **JavaScript**: Gestiona la lógica para capturar los datos del formulario, crear instancias de las clases `Propietario`, `Animal`, y `Mascota`, y mostrar los resultados en la página.

### Funcionalidad del Formulario

Cuando el usuario llena y envía el formulario:
1. Se crean objetos `Mascota` con los datos ingresados.
2. Los datos del propietario, el tipo de mascota, el nombre de la mascota, y la enfermedad se muestran debajo del formulario.
3. Si el formulario no está completo, se muestra un mensaje de advertencia.

### Clases en JavaScript

El proyecto incluye las siguientes clases:

- **Propietario**: Almacena los datos del dueño (nombre, dirección, y teléfono).
- **Animal**: Hereda de `Propietario` y agrega el tipo de animal (perro, gato o conejo).
- **Mascota**: Hereda de `Animal` y agrega el nombre de la mascota y la enfermedad.

#### Ejemplo de la Clase `Mascota`:
```js
class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this.nombreMascota = nombreMascota;
    this.enfermedad = enfermedad;
  }

  getNombre() {
    return this.nombreMascota;
  }

  getEnfermedad() {
    return this.enfermedad;
  }
}
```

### Tecnologías Utilizadas

- HTML5 para la estructura del sitio web.
- Bootstrap 4 para el diseño responsivo.
- Google Fonts para la tipografía.
- JavaScript para la lógica interactiva.
- CSS personalizado para los estilos adicionales.

### Instalación

1. Clona el repositorio.
2. Abre el archivo index.html en tu navegador.  

### Uso

1. Completa el formulario con los datos del dueño y de la mascota.
2. Haz clic en Agregar.
3. Los datos ingresados aparecerán en la parte inferior del formulario.

### Autor

- Ivan Vargas Gantiva


Este archivo `README.md` documenta claramente la estructura, funcionalidad y clases utilizadas en tu proyecto. Puedes modificar los créditos y agregar más detalles según sea necesario.

