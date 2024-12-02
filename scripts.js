// Botón de ofertas
const ofertasLink = document.querySelector(".top-bar .left a");
if (ofertasLink) {
    ofertasLink.addEventListener("click", (e) => {
        e.preventDefault();
        verOfertas();
    });
}

// Redirigir al libro de reclamaciones
const libroReclamaciones = document.querySelector("footer .footer-content a");
if (libroReclamaciones) {
    libroReclamaciones.addEventListener("click", (e) => {
        e.preventDefault();
        abrirLibroReclamaciones();
    });
}

// Función de prueba para botones de productos
const productButtons = document.querySelectorAll(".ver-mas");
productButtons.forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.dataset.productName || "Producto";
        verMas(productName);
    });
});

// Función para mostrar más detalles de un producto
function verMas(producto) {
    alert("Más detalles sobre: " + producto);
    // Puedes redirigir a otra página específica del producto:
    // window.location.href = producto + ".html";
}

// Función para suscribirse al boletín
function suscribirse() {
    const email = document.getElementById('email').value;
    if (email) {
        alert("¡Gracias por suscribirte! Hemos registrado tu correo: " + email);
    } else {
        alert("Por favor, ingresa un correo válido.");
    }
}

// Lista de compras (carrito)
const compras = [];

// Función para añadir un producto al carrito
function agregarAlCarrito(nombre, precio, imagen) {
    const producto = { nombre, precio, imagen };
    compras.push(producto);
    alert(`${nombre} ha sido agregado al carrito.`);
    mostrarCompras();
}

// Función para mostrar el carrito
function mostrarCompras() {
    const carritoExistente = document.querySelector('.carrito-contenido');
    if (carritoExistente) carritoExistente.remove();

    const carritoDiv = document.createElement('div');
    carritoDiv.className = 'carrito-contenido';

    if (compras.length === 0) {
        carritoDiv.innerHTML = `<h2>Carrito vacío</h2>`;
    } else {
        carritoDiv.innerHTML = compras.map(producto => `
            <div class="compra-item">
                <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 50px; height: 50px;">
                <div>
                    <h3>${producto.nombre}</h3>
                    <span>Precio: ${producto.precio}</span>
                </div>
            </div>
        `).join('');
    }

    const cerrarBtn = document.createElement('button');
    cerrarBtn.textContent = 'Cerrar';
    cerrarBtn.className = 'cerrar-carrito';
    cerrarBtn.onclick = () => carritoDiv.remove();

    carritoDiv.appendChild(cerrarBtn);
    document.body.appendChild(carritoDiv);
}

// Escucha eventos de los botones "Comprar" dinámicamente
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-comprar')) {
        const productoDiv = e.target.closest('.producto'); // Encuentra el contenedor del producto
        const nombre = productoDiv.querySelector('h3').textContent;
        const precio = productoDiv.querySelector('p').textContent.replace('Precio: ', '');
        const imagen = productoDiv.querySelector('img').src;
        agregarAlCarrito(nombre, precio, imagen);
    }
});


// Función de búsqueda
function buscar() {
    const query = document.querySelector(".search-box").value;
    if (query) {
        alert("Buscando: " + query);
        // Puedes implementar la búsqueda con un sistema más complejo:
        // Por ejemplo, redirigir a una página con los resultados
        // window.location.href = "buscar.html?q=" + encodeURIComponent(query);
    } else {
        alert("Por favor, ingresa un término de búsqueda.");
    }
}

// Función para mostrar productos de una categoría específica
function showCategory(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => product.classList.remove('show'));

    const selectedProducts = document.querySelectorAll(`.${category}`);
    selectedProducts.forEach(product => product.classList.add('show'));
}
const productosFragancias = [
    { nombre: "Perfume Bombshell Isle", imagen: "images/perfume-bombshell.png", precio: "S/ 389.00" },
    { nombre: "Perfume Tease Dreamer", imagen: "images/perfume-tease-dreamer.png", precio: "S/ 299.00" },
    { nombre: "Perfume Love Spell", imagen: "images/perfume-love-spell.png", precio: "S/ 219.00" },
];

function mostrarFragancias() {
    const contenedor = document.getElementById("productos-contenedor");
    contenedor.innerHTML = productosFragancias.map(producto => `
        <div class="product">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.precio}</p>
            <button onclick="verMas('${producto.nombre}', '${producto.imagen}', '${producto.precio}')">Ver Más</button>
        </div>
    `).join("");
}

function verMas(nombre, imagen, precio) {
    document.getElementById("modal-title").innerText = nombre;
    document.getElementById("modal-img").src = imagen;
    document.getElementById("modal-price").innerText = precio;
    document.getElementById("myModal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("myModal").style.display = "none";
}

// Llama a las funciones al cargar la página
window.onload = function() {
    mostrarFragancias();
};


