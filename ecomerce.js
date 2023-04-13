// Obtener referencia al botón Agregar al carrito
var botonesAgregar = document.querySelectorAll('button');

// Iterar sobre cada botón y agregar un listener para el evento click
for (var i = 0; i < botonesAgregar.length; i++) {
  botonesAgregar[i].addEventListener('click', agregarAlCarrito);
}

// Función para agregar un producto al carrito
function agregarAlCarrito(evento) {
  // Obtener la sección del producto
  var producto = evento.target.parentNode;
  // Obtener el título y la descripción del producto
 

  
