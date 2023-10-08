// Variables
const carrito = [];
const listaCarrito = document.getElementById('lista-carrito');
const total = document.getElementById('total');

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
        item.innerHTML = `${producto.nombre} - Cantidad: ${producto.cantidad} - $${producto.precio * producto.cantidad}`;
        
        // Botón para eliminar un producto del carrito
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm', 'ml-2');
        botonEliminar.onclick = () => eliminarProducto(producto.nombre);

        item.appendChild(botonEliminar);
        listaCarrito.appendChild(item);
        precioTotal += producto.precio * producto.cantidad;
    });

    total.innerText = precioTotal.toFixed(2);
}
