class Propietario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }

  datosPropietario() {
    return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion} y el número telefónico de contacto: ${this.telefono}`;
  }
}

class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this.tipo = tipo;
  }

  getTipo() {
    return this.tipo;
  }
}

class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this.nombreMascota = nombreMascota;
    this.enfermedad = enfermedad;
  }

  getNombre() {
    return this.nombreMascota;
  }
  setNombre() {
    this.nombreMascota = nuevaEnfermedad;
  }

  getEnfermedad() {
    return this.enfermedad;
  }
  setEnfermedad() {
    this.enfermedad = nuevaEnfermedad;
  }
}

// Capturar el formulario y el resultado
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

// Función para mostrar errores

//Escuchar el evento submit
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  //Obtener los datos del formulario
  const propietario = document.getElementById("propietario").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const nombreMascota = document.getElementById("nombreMascota").value.trim();
  const tipo = document.getElementById("tipo").value.trim();
  const enfermedad = document.getElementById("enfermedad").value.trim();

  // Validar que todos los campos esten llenos
  if (
    !propietario ||
    !telefono ||
    !direccion ||
    !nombreMascota ||
    !tipo ||
    !enfermedad
  ) {
    alert("Por favor, completa todos los datos");
  }

  // Crear la mascota con los datos
  const nuevaMascota = new Mascota(
    propietario,
    direccion,
    telefono,
    tipo,
    nombreMascota,
    enfermedad
  );

  // Agregar el resultado como innerHTML
  resultado.innerHTML += `
  <li>
    ${nuevaMascota.datosPropietario()}
  </li>
 
  <li>
    El tipo de animal es un: ${nuevaMascota.tipo}, 
    mientras que el nombre de la mascota es: ${nuevaMascota.nombreMascota}
    y la enfermedad es: ${nuevaMascota.enfermedad}
  </li>`;

  // Limpiar el formulario
  formulario.reset();
});
