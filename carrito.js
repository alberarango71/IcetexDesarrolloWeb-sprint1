<script>
    // Obtener elementos del DOM
    const listaCarrito = document.getElementById('lista-carrito');
    const total = document.getElementById('total');
    const btnComprar = document.getElementById('btn-comprar');

    // Inicializar carrito como un array vacío
    const carrito = [];

    // Función para actualizar el carrito en el DOM
    function actualizarCarrito() {
        listaCarrito.innerHTML = ''; // Limpiar el contenido del carrito

        carrito.forEach((producto) => {
            const item = document.createElement('li');
            item.innerHTML = `${producto.nombre} - Cantidad: ${producto.cantidad}`;
            listaCarrito.appendChild(item);
        });

        // Calcular el precio total
        const precioTotal = carrito.reduce((total, producto) => {
            return total + (producto.precio * producto.cantidad);
        }, 0);

        total.textContent = precioTotal;
    }

    // Función para agregar un producto al carrito
    function agregarProductoAlCarrito(producto) {
        const productoEnCarrito = carrito.find((item) => item.id === producto.id);

        if (productoEnCarrito) {
            productoEnCarrito.cantidad++;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }

        actualizarCarrito();
    }

    // Evento para agregar productos al hacer clic en un botón "Agregar al carrito"
    const botonesAgregar = document.querySelectorAll('.btn-agregar');

    botonesAgregar.forEach((boton) => {
        boton.addEventListener('click', () => {
            const idProducto = boton.getAttribute('data-id');
            const nombreProducto = boton.getAttribute('data-nombre');
            const precioProducto = parseFloat(boton.getAttribute('data-precio'));

            agregarProductoAlCarrito({
                id: idProducto,
                nombre: nombreProducto,
                precio: precioProducto,
            });
        });
    });

    // Evento para finalizar la compra
    btnComprar.addEventListener('click', () => {
        // Aquí puedes implementar la lógica de pago o simplemente mostrar un mensaje de confirmación
        alert('Compra finalizada. Gracias por tu compra.');
        carrito.length = 0; // Limpiar el carrito después de la compra
        actualizarCarrito();
    });
</script>
