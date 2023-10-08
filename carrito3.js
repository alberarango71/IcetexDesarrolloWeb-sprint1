// Variables
const carrito = [];
const listaCarrito = document.getElementById('lista-carrito');
const total = document.getElementById('total');

// Variable para rastrear la cantidad de productos disponibles
let productosDisponibles = {
    'Producto 1': 10,  // Cantidad inicial para Producto 1
    'Producto 2': 15,  // Cantidad inicial para Producto 2
    'Producto 3': 12,  // Cantidad inicial para Producto 3
};



// Función para agregar un producto al carrito
function agregarProducto(nombre, precio) {
    // Comprobar si el producto ya está en el carrito
    const productoExistente = carrito.find((producto) => producto.nombre === nombre);

    if (productoExistente) {
        // Si el producto ya existe, aumentar la cantidad
        productoExistente.cantidad++;
    } else {
        // Si el producto no existe en el carrito, agregarlo con cantidad 1
        carrito.push({ nombre, precio, cantidad: 1 });
    }

    actualizarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarProducto(nombre) {
    const index = carrito.findIndex((producto) => producto.nombre === nombre);
    if (index !== -1) {
        const producto = carrito[index];
        if (producto.cantidad > 1) {
            // Si hay más de un producto, reducir la cantidad
            producto.cantidad--;
        } else {
            // Si solo hay uno, eliminarlo del carrito
            carrito.splice(index, 1);
        }
        actualizarCarrito();
    }
}

// Función para actualizar el carrito en el DOM
function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    let precioTotal = 0;

    carrito.forEach((producto) => {
        const item = document.createElement('li');

        // Crear un input para editar la cantidad
        const cantidadInput = document.createElement('input');
        cantidadInput.type = 'number';
        cantidadInput.value = producto.cantidad;
        cantidadInput.min = '1';
        cantidadInput.addEventListener('change', (event) => {
            const nuevaCantidad = parseInt(event.target.value);
            if (nuevaCantidad > 0) {
                producto.cantidad = nuevaCantidad;
                actualizarCarrito();
            } else {
                // Si el usuario ingresa una cantidad no válida, restaurar la cantidad anterior
                event.target.value = producto.cantidad;
            }
        });

        // Botón para eliminar un producto del carrito
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm', 'ml-2');
        botonEliminar.onclick = () => eliminarProducto(producto.nombre);

        item.innerHTML = `
            ${producto.nombre} - $${producto.precio * producto.cantidad} 
            <label>Cantidad:</label>
        `;
        item.appendChild(cantidadInput);
        item.appendChild(botonEliminar);
        listaCarrito.appendChild(item);
        precioTotal += producto.precio * producto.cantidad;
    });

    total.innerText = precioTotal.toFixed(2);
}

// Obtener el botón "Comprar" por su id
const btnComprar = document.getElementById('btn-comprar');

// Función para finalizar la compra
function finalizarCompra() {
    // Aquí puedes agregar la lógica necesaria, como guardar la orden o redirigir a una página de confirmación.
    // En este ejemplo, simplemente limpiaremos el carrito de compras.
    carrito.length = 0; // Limpiar el carrito

    // Actualizar el carrito en el DOM
    actualizarCarrito();
    alert('¡Compra realizada con éxito!');

    // Puedes redirigir a una página de confirmación o hacer otras acciones necesarias.
}

// Agregar un evento de clic al botón "Comprar" que llame a la función de finalizar compra
btnComprar.addEventListener('click', finalizarCompra);


// ... (código adicional) ...
