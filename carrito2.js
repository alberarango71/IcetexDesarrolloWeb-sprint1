   <script>
        // Variables
        const carrito = [];
        const listaCarrito = document.getElementById('lista-carrito');
        const total = document.getElementById('total');

        // Función para agregar un producto al carrito
        function agregarProducto(nombre, precio) {
            const producto = { nombre, precio };
            carrito.push(producto);
            actualizarCarrito();
        }

        // Función para actualizar el carrito en el DOM
        function actualizarCarrito() {
            listaCarrito.innerHTML = '';
            let precioTotal = 0;

            carrito.forEach((producto) => {
                const item = document.createElement('li');
                item.innerText = `${producto.nombre} - $${producto.precio}`;
                listaCarrito.appendChild(item);
                precioTotal += producto.precio;
            });

            total.innerText = precioTotal.toFixed(2);
        }
    </script>