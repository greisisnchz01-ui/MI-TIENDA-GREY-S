// ==========================================
//   MI TIENDA GREY'S · script.js
// ==========================================

// ===== CONFIGURACIÓN =====
const ENVIO_GRATIS   = 500;
const CLAVE_STORAGE  = "carritoGrey";
const CLAVE_FAVS     = "favoritosGrey";
const CLAVE_TEMA     = "temaGrey";
const WHATSAPP       = "5215500000000"; // 👈 CAMBIA esto por tu número real (52 + lada + número, sin espacios)

// ===== PRODUCTOS =====
const productos = [
    { nombre: "Gloss Cherry", categoria: "Maquillaje", precio: 129, imagen: "IMG/gloss-cherry.jpg" },
    { nombre: "Blush Rosé", categoria: "Maquillaje", precio: 149, imagen: "IMG/blush-rose.jpg" },
    { nombre: "Máscara Lash Doll", categoria: "Maquillaje", precio: 159, imagen: "IMG/mascara-lash-doll.jpg" },
    { nombre: "Lip Oil Pink", categoria: "Maquillaje", precio: 139, imagen: "IMG/lip-oil-pink.jpg" },
    { nombre: "Paleta Sweet Pink", categoria: "Maquillaje", precio: 249, imagen: "IMG/paleta-sweet-pink.jpg" },
    { nombre: "Rubor Berry", categoria: "Maquillaje", precio: 159, imagen: "IMG/rubor-berry.jpg" },
    { nombre: "Delineador Black", categoria: "Maquillaje", precio: 119, imagen: "IMG/delineador-black.jpg" },
    { nombre: "Iluminador Glow", categoria: "Maquillaje", precio: 169, imagen: "IMG/iluminador-glow.jpg" },
    { nombre: "Corrector Soft Cover", categoria: "Maquillaje", precio: 179, imagen: "IMG/corrector-soft-cover.jpg" },
    { nombre: "Lip Liner Wine", categoria: "Maquillaje", precio: 109, imagen: "IMG/lip-liner-wine.jpg" },
    { nombre: "Base Velvet Skin", categoria: "Maquillaje", precio: 229, imagen: "IMG/base-velvet-skin.jpg" },
    { nombre: "Polvo Soft Matte", categoria: "Maquillaje", precio: 179, imagen: "IMG/polvo-soft-matte.jpg" },
    { nombre: "Primer Glow", categoria: "Maquillaje", precio: 189, imagen: "IMG/primer-glow.jpg" },
    { nombre: "Bronzer Cocoa", categoria: "Maquillaje", precio: 169, imagen: "IMG/bronzer-cocoa.jpg" },
    { nombre: "Contorno Cream", categoria: "Maquillaje", precio: 179, imagen: "IMG/contorno-cream.jpg" },
    { nombre: "Tinta para labios Cherry", categoria: "Maquillaje", precio: 149, imagen: "IMG/tinta-cherry.jpg" },
    { nombre: "Sombra líquida Shimmer", categoria: "Maquillaje", precio: 159, imagen: "IMG/sombra-shimmer.jpg" },
    { nombre: "Fijador Make Up Mist", categoria: "Maquillaje", precio: 199, imagen: "IMG/fijador-make-up-mist.jpg" },
    { nombre: "Pestañas Baddie", categoria: "Maquillaje", precio: 119, imagen: "IMG/pestanas-baddie.jpg" },
    { nombre: "Bálsamo Lip Care", categoria: "Maquillaje", precio: 99, imagen: "IMG/balsamo-lip-care.jpg" },

    { nombre: "Gel Cleanser Fresh", categoria: "Skincare", precio: 189, imagen: "IMG/gel-cleanser-fresh.jpg" },
    { nombre: "Espuma Facial Soft", categoria: "Skincare", precio: 179, imagen: "IMG/espuma-facial-soft.jpg" },
    { nombre: "Agua Micelar Glow", categoria: "Skincare", precio: 159, imagen: "IMG/agua-micelar-glow.jpg" },
    { nombre: "Toner Hydrating Rose", categoria: "Skincare", precio: 199, imagen: "IMG/toner-hydrating-rose.jpg" },
    { nombre: "Serum Hyaluronic Glow", categoria: "Skincare", precio: 249, imagen: "IMG/serum-hyaluronic-glow.jpg" },
    { nombre: "Serum Vitamin C", categoria: "Skincare", precio: 259, imagen: "IMG/serum-vitamin-c.jpg" },
    { nombre: "Serum Niacinamide", categoria: "Skincare", precio: 239, imagen: "IMG/serum-niacinamide.jpg" },
    { nombre: "Crema Moisture Glow", categoria: "Skincare", precio: 229, imagen: "IMG/crema-moisture-glow.jpg" },
    { nombre: "Gel Hidratante Aqua", categoria: "Skincare", precio: 219, imagen: "IMG/gel-hidratante-aqua.jpg" },
    { nombre: "Crema Facial Soft Skin", categoria: "Skincare", precio: 239, imagen: "IMG/crema-facial-soft-skin.jpg" },
    { nombre: "Protector Solar SPF 50", categoria: "Skincare", precio: 299, imagen: "IMG/protector-solar-spf50.jpg" },
    { nombre: "Sun Stick Glow SPF 50", categoria: "Skincare", precio: 279, imagen: "IMG/sun-stick-glow.jpg" },
    { nombre: "Mascarilla Pink Clay", categoria: "Skincare", precio: 169, imagen: "IMG/mascarilla-pink-clay.jpg" },
    { nombre: "Mascarilla Hydrogel", categoria: "Skincare", precio: 149, imagen: "IMG/mascarilla-hydrogel.jpg" },
    { nombre: "Eye Cream Bright", categoria: "Skincare", precio: 219, imagen: "IMG/eye-cream-bright.jpg" },
    { nombre: "Parches para Ojos Glow", categoria: "Skincare", precio: 159, imagen: "IMG/parches-ojos-glow.jpg" },
    { nombre: "Exfoliante Facial Smooth", categoria: "Skincare", precio: 189, imagen: "IMG/exfoliante-facial-smooth.jpg" },
    { nombre: "Cleansing Balm Cherry", categoria: "Skincare", precio: 229, imagen: "IMG/cleansing-balm-cherry.jpg" },
    { nombre: "Facial Mist Hydrating", categoria: "Skincare", precio: 179, imagen: "IMG/facial-mist-hydrating.jpg" },
    { nombre: "Essence Dewy Skin", categoria: "Skincare", precio: 249, imagen: "IMG/essence-dewy-skin.jpg" },

    { nombre: "Shampoo Silk Repair", categoria: "Cabello", precio: 189, imagen: "IMG/shampoo-silk-repair.jpg" },
    { nombre: "Acondicionador Soft Hair", categoria: "Cabello", precio: 189, imagen: "IMG/acondicionador-soft-hair.jpg" },
    { nombre: "Mascarilla Hair Repair", categoria: "Cabello", precio: 229, imagen: "IMG/mascarilla-hair-repair.jpg" },
    { nombre: "Aceite Argan Glow", categoria: "Cabello", precio: 199, imagen: "IMG/aceite-argan-glow.jpg" },
    { nombre: "Serum Anti-Frizz", categoria: "Cabello", precio: 219, imagen: "IMG/serum-anti-frizz.jpg" },
    { nombre: "Crema para Peinar Smooth", categoria: "Cabello", precio: 179, imagen: "IMG/crema-peinar-smooth.jpg" },
    { nombre: "Leave-In Hydration", categoria: "Cabello", precio: 209, imagen: "IMG/leave-in-hydration.jpg" },
    { nombre: "Protector Térmico Heat Shield", categoria: "Cabello", precio: 199, imagen: "IMG/protector-termico-heat-shield.jpg" },
    { nombre: "Spray Anti-Frizz", categoria: "Cabello", precio: 189, imagen: "IMG/spray-anti-frizz.jpg" },
    { nombre: "Shampoo Dry Fresh", categoria: "Cabello", precio: 219, imagen: "IMG/shampoo-dry-fresh.jpg" },
    { nombre: "Shampoo Purple Blonde", categoria: "Cabello", precio: 229, imagen: "IMG/shampoo-purple-blonde.jpg" },
    { nombre: "Acondicionador Repair", categoria: "Cabello", precio: 199, imagen: "IMG/acondicionador-repair.jpg" },
    { nombre: "Mascarilla Coco & Shine", categoria: "Cabello", precio: 219, imagen: "IMG/mascarilla-coco-shine.jpg" },
    { nombre: "Mousse Volume", categoria: "Cabello", precio: 189, imagen: "IMG/mousse-volume.jpg" },
    { nombre: "Gel Curl Define", categoria: "Cabello", precio: 169, imagen: "IMG/gel-curl-define.jpg" },
    { nombre: "Spray Detangling", categoria: "Cabello", precio: 159, imagen: "IMG/spray-detangling.jpg" },
    { nombre: "Tratamiento Protein Care", categoria: "Cabello", precio: 239, imagen: "IMG/tratamiento-protein-care.jpg" },
    { nombre: "Hair Mist Pink", categoria: "Cabello", precio: 179, imagen: "IMG/hair-mist-pink.jpg" },
    { nombre: "Cera Styling Soft", categoria: "Cabello", precio: 149, imagen: "IMG/cera-styling-soft.jpg" },

    { nombre: "Body Lotion Pink", categoria: "Cuerpo", precio: 179, imagen: "IMG/body-lotion-pink.jpg" },
    { nombre: "Crema Corporal Vanilla", categoria: "Cuerpo", precio: 189, imagen: "IMG/crema-corporal-vanilla.jpg" },
    { nombre: "Body Mist Cherry", categoria: "Cuerpo", precio: 199, imagen: "IMG/body-mist-cherry.jpg" },
    { nombre: "Body Mist Rose", categoria: "Cuerpo", precio: 199, imagen: "IMG/body-mist-rose.jpg" },
    { nombre: "Scrub Sugar Pink", categoria: "Cuerpo", precio: 189, imagen: "IMG/scrub-sugar-pink.jpg" },
    { nombre: "Exfoliante Corporal Berry", categoria: "Cuerpo", precio: 199, imagen: "IMG/exfoliante-corporal-berry.jpg" },
    { nombre: "Gel de Baño Rose", categoria: "Cuerpo", precio: 159, imagen: "IMG/gel-bano-rose.jpg" },
    { nombre: "Shower Oil Glow", categoria: "Cuerpo", precio: 219, imagen: "IMG/shower-oil-glow.jpg" },
    { nombre: "Body Butter Cocoa", categoria: "Cuerpo", precio: 229, imagen: "IMG/body-butter-cocoa.jpg" },
    { nombre: "Body Oil Glow", categoria: "Cuerpo", precio: 219, imagen: "IMG/body-oil-glow.jpg" },
    { nombre: "Kit Body Care Pink", categoria: "Cuerpo", precio: 299, imagen: "IMG/kit-body-care-pink.jpg" }
];

// Descripciones automáticas para la vista rápida
const DESCRIPCIONES = {
    Maquillaje: "Fórmula de alta pigmentación y larga duración. Se difumina fácil y deja un acabado natural, perfecto para tu rutina diaria.",
    Skincare:   "Textura ligera de rápida absorción. Ayuda a hidratar, suavizar e iluminar la piel sin dejar sensación grasosa.",
    Cabello:    "Cuida y repara la fibra capilar desde la raíz. Deja el cabello suave, manejable y con brillo saludable.",
    Cuerpo:     "Deliciosa textura que se absorbe rápido y perfuma la piel. Ideal para consentirte todos los días."
};

// ===== ESTADO =====
const contenedor = document.querySelector(".productos");
let carrito      = cargarCarrito();
let favoritos    = cargarFavoritos();
let temporizadorBusqueda;
let temporizadorToast;
let categoriaActual = "todos";
let ordenActual     = "default";
let precioMaximo    = 350;
let textoBusqueda   = "";

// ==========================================
//   HELPERS
// ==========================================
const $  = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const dinero = (n) => "$" + n.toLocaleString("es-MX");
const sinAcentos = (t) => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

// ==========================================
//   PRODUCTOS · FILTRADO / ORDEN / RENDER
// ==========================================
function productosFiltrados() {
    let lista = [...productos];

    if (categoriaActual !== "todos") {
        lista = lista.filter(p => p.categoria === categoriaActual);
    }

    if (textoBusqueda) {
        const t = sinAcentos(textoBusqueda);
        lista = lista.filter(p =>
            sinAcentos(p.nombre).includes(t) ||
            sinAcentos(p.categoria).includes(t)
        );
    }

    lista = lista.filter(p => p.precio <= precioMaximo);

    switch (ordenActual) {
        case "precio-asc":  lista.sort((a, b) => a.precio - b.precio); break;
        case "precio-desc": lista.sort((a, b) => b.precio - a.precio); break;
        case "nombre":      lista.sort((a, b) => a.nombre.localeCompare(b.nombre, "es")); break;
    }

    return lista;
}

function mostrarProductos(lista, titulo) {
    contenedor.innerHTML = "";

    $("#titulo-catalogo").textContent    = titulo || "Todos los productos";
    $("#contador-resultados").textContent =
        lista.length + (lista.length === 1 ? " producto" : " productos");

    if (lista.length === 0) {
        contenedor.innerHTML = `
            <p style="grid-column:1/-1;text-align:center;color:#8a6060;padding:60px 20px;font-style:italic;">
                No encontramos productos para esa búsqueda ♡
            </p>`;
        return;
    }

    lista.forEach((producto, i) => {
        const indiceReal = productos.indexOf(producto);
        const fav = favoritos.includes(producto.nombre);

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("producto");
        if (i < 4 && categoriaActual === "todos" && !textoBusqueda && ordenActual === "default" && precioMaximo === 350) {
            tarjeta.classList.add("destacado");
        }
        tarjeta.style.animationDelay = Math.min(i * 0.045, 0.9) + "s";
        tarjeta.dataset.indice = indiceReal;

        tarjeta.innerHTML = `
            <button class="btn-fav ${fav ? "activo" : ""}" title="Favorito">${fav ? "❤️" : "🤍"}</button>
            <img src="${producto.imagen}" alt="${producto.nombre}"
                 class="imagen-producto" loading="lazy"
                 onerror="this.classList.add('sin-imagen')">
            <h3>${producto.nombre}</h3>
            <p class="categoria-tag">${producto.categoria}</p>
            <p class="precio">${dinero(producto.precio)}</p>
            <button class="btn-agregar">🛍️ Agregar al carrito</button>
            <button class="btn-comprar">💳 Comprar ♡</button>
        `;

        // Vista rápida (clic en la imagen o en el título)
        tarjeta.querySelector(".imagen-producto")
            .addEventListener("click", () => abrirModal(indiceReal));
        tarjeta.querySelector("h3")
            .addEventListener("click", () => abrirModal(indiceReal));

        tarjeta.querySelector(".btn-fav")
            .addEventListener("click", (e) => {
                e.stopPropagation();
                toggleFavorito(producto.nombre, e.currentTarget);
            });

        tarjeta.querySelector(".btn-agregar")
            .addEventListener("click", () => agregarCarrito(indiceReal));

        tarjeta.querySelector(".btn-comprar")
            .addEventListener("click", () => comprarProducto(producto.nombre));

        contenedor.appendChild(tarjeta);
    });

    activarTilt();
}

function refrescarCatalogo() {
    const titulos = {
        todos: "Todos los productos",
        Maquillaje: "Maquillaje",
        Skincare: "Skincare",
        Cabello: "Cabello",
        Cuerpo: "Cuidado corporal"
    };
    let titulo = textoBusqueda
        ? `Resultados para "${textoBusqueda}"`
        : titulos[categoriaActual] || "Productos";

    mostrarProductos(productosFiltrados(), titulo);
}

function filtrarProductos(categoria, boton) {
    categoriaActual = categoria;
    $$(".botones-categorias button").forEach(b =>
        b.classList.toggle("activa", b === boton));
    refrescarCatalogo();
}

function mostrarTodos() {
    categoriaActual = "todos";
    textoBusqueda = "";
    $$(".botones-categorias button").forEach(b => b.classList.remove("activa"));
    refrescarCatalogo();
}

function irAlCatalogo() {
    $("#catalogo").scrollIntoView({ behavior: "smooth" });
}

function filtrarDesdeHero(categoria) {
    filtrarProductos(categoria, null);
    irAlCatalogo();
}

// ==========================================
//   BUSCADOR · ORDEN · RANGO
// ==========================================
function buscarProducto() {
    clearTimeout(temporizadorBusqueda);
    temporizadorBusqueda = setTimeout(() => {
        textoBusqueda = $("#buscador").value.trim();
        refrescarCatalogo();
    }, 150);
}

function ordenarProductos() {
    ordenActual = $("#orden").value;
    refrescarCatalogo();
}

function filtrarPorRango() {
    precioMaximo = Number($("#rango").value);
    $("#valorRango").textContent = "$" + precioMaximo;
    refrescarCatalogo();
}

// ==========================================
//   CARRITO
// ==========================================
function agregarCarrito(indice) {
    const producto = productos[indice];
    const existente = carrito.find(i => i.nombre === producto.nombre);

    if (existente) existente.cantidad++;
    else carrito.push({ ...producto, cantidad: 1 });

    guardarCarrito();
    actualizarCarrito();
    mostrarToast(`♡ ${producto.nombre} agregado`);
    animarCarrito();
}

function actualizarCarrito() {
    const unidades = carrito.reduce((s, i) => s + i.cantidad, 0);
    const contador = $("#contador-carrito");
    if (contador) contador.textContent = unidades;
}

function animarCarrito() {
    const btn = document.querySelector(".boton-carrito");
    if (!btn) return;
    btn.animate(
        [{ transform: "scale(1)" }, { transform: "scale(1.18)" }, { transform: "scale(1)" }],
        { duration: 420, easing: "ease-out" }
    );
}

function mostrarCarrito() {
    $("#carrito").classList.add("abierto");
    $("#overlay").classList.add("activo");
    document.body.style.overflow = "hidden";
    mostrarProductosCarrito();
}

function cerrarCarrito() {
    $("#carrito").classList.remove("abierto");
    $("#overlay").classList.remove("activo");
    document.body.style.overflow = "";
}

function mostrarProductosCarrito() {
    const lista = $("#lista-carrito");
    const totalElemento = $("#total-carrito");

    lista.innerHTML = "";
    let total = 0;

    if (carrito.length === 0) {
        lista.innerHTML = `
            <p class="vacio">
                Tu carrito está vacío ♡<br><br>
                ¡Anímate a consentirte!
            </p>`;
        totalElemento.textContent = "$0";
        actualizarBarraEnvio(0);
        return;
    }

    carrito.forEach((producto, indice) => {
        total += producto.precio * producto.cantidad;

        const fila = document.createElement("div");
        fila.classList.add("producto-carrito");
        fila.style.animationDelay = (indice * 0.05) + "s";

        fila.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}"
                 onerror="this.style.visibility='hidden'">
            <div class="info">
                <p>${producto.nombre}</p>
                <span>${dinero(producto.precio)} c/u</span>
            </div>
            <div class="cantidad">
                <button class="menos">−</button>
                <span>${producto.cantidad}</span>
                <button class="mas">+</button>
            </div>
            <button class="basura">🗑️</button>
        `;

        fila.querySelector(".menos").addEventListener("click", () => {
            producto.cantidad--;
            if (producto.cantidad <= 0) carrito.splice(indice, 1);
            guardarCarrito();
            actualizarCarrito();
            mostrarProductosCarrito();
        });

        fila.querySelector(".mas").addEventListener("click", () => {
            producto.cantidad++;
            guardarCarrito();
            actualizarCarrito();
            mostrarProductosCarrito();
        });

        fila.querySelector(".basura").addEventListener("click", () => {
            quitarDelCarrito(indice);
        });

        lista.appendChild(fila);
    });

    totalElemento.textContent = dinero(total);
    actualizarBarraEnvio(total);
}

function actualizarBarraEnvio(total) {
    const texto = $("#texto-envio");
    const barra = $("#progreso-envio");
    if (!texto || !barra) return;

    const falta = ENVIO_GRATIS - total;
    const pct = Math.min((total / ENVIO_GRATIS) * 100, 100);

    barra.style.width = pct + "%";

    if (total <= 0) {
        texto.textContent = `Agrega $${ENVIO_GRATIS} para envío gratis`;
    } else if (falta > 0) {
        texto.textContent = `Te faltan ${dinero(falta)} para envío gratis 🚚`;
    } else {
        texto.textContent = "¡Felicidades! Tienes envío gratis 🎉";
    }
}

function quitarDelCarrito(indice) {
    const nombre = carrito[indice].nombre;
    carrito.splice(indice, 1);
    guardarCarrito();
    actualizarCarrito();
    mostrarProductosCarrito();
    mostrarToast(`Quitamos ${nombre} del carrito`);
}

function comprarProducto(nombre) {
    mostrarToast(`♡ ¡Gracias por comprar ${nombre}!`);
    lanzarConfeti();
}

function finalizarCompra() {
    if (carrito.length === 0) {
        mostrarToast("Tu carrito está vacío ♡");
        return;
    }

    const total = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);

    cerrarCarrito();
    lanzarConfeti();
    mostrarToast(`♡ ¡Gracias! Pedido de ${dinero(total)} confirmado`);

    carrito = [];
    guardarCarrito();
    actualizarCarrito();
    mostrarProductosCarrito();
}

// ==========================================
//   WHATSAPP
// ==========================================
function enviarWhatsApp() {
    if (carrito.length === 0) {
        mostrarToast("Tu carrito está vacío ♡");
        return;
    }

    let mensaje = "¡Hola! Quiero hacer este pedido en Mi Tienda GREY'S ♡\n\n";
    let total = 0;

    carrito.forEach(p => {
        const subtotal = p.precio * p.cantidad;
        total += subtotal;
        mensaje += `• ${p.nombre} x${p.cantidad} — ${dinero(subtotal)}\n`;
    });

    mensaje += `\nTotal: ${dinero(total)}`;
    if (total >= ENVIO_GRATIS) mensaje += "\n🚚 ¡Con envío gratis!";

    const url = `[wa.me](https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)})`;
    window.open(url, "_blank");
}

// ==========================================
//   FAVORITOS
// ==========================================
function cargarFavoritos() {
    try {
        return JSON.parse(localStorage.getItem(CLAVE_FAVS)) || [];
    } catch (e) {
        return [];
    }
}

function guardarFavoritos() {
    localStorage.setItem(CLAVE_FAVS, JSON.stringify(favoritos));
}

function toggleFavorito(nombre, boton) {
    const i = favoritos.indexOf(nombre);

    if (i >= 0) {
        favoritos.splice(i, 1);
        boton.textContent = "🤍";
        boton.classList.remove("activo");
        mostrarToast(`Quitamos ${nombre} de favoritos`);
    } else {
        favoritos.push(nombre);
        boton.textContent = "❤️";
        boton.classList.add("activo");
        mostrarToast(`♡ ${nombre} está en tus favoritos`);
    }

    guardarFavoritos();
}

// ==========================================
//   VISTA RÁPIDA (MODAL)
// ==========================================
function abrirModal(indice) {
    const producto = productos[indice];
    const cont = $("#modalContenido");

    cont.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}"
             onerror="this.classList.add('sin-imagen')">
        <div class="modal-info">
            <p class="modal-cat">${producto.categoria}</p>
            <h2>${producto.nombre}</h2>
            <p class="modal-precio">${dinero(producto.precio)}</p>
            <p class="desc">${DESCRIPCIONES[producto.categoria] || ""}</p>
            <button class="btn-agregar">🛍️ Agregar al carrito</button>
            <button class="btn-comprar">💳 Comprar ♡</button>
        </div>
    `;

    cont.querySelector(".btn-agregar")
        .addEventListener("click", () => {
            agregarCarrito(indice);
            cerrarModal();
        });

    cont.querySelector(".btn-comprar")
        .addEventListener("click", () => {
            comprarProducto(producto.nombre);
            cerrarModal();
        });

    $("#modal").classList.add("abierto");
    document.body.style.overflow = "hidden";
}

function cerrarModal() {
    $("#modal").classList.remove("abierto");
    if (!$("#carrito").classList.contains("abierto")) {
        document.body.style.overflow = "";
    }
}

// ==========================================
//   TOAST
// ==========================================
function mostrarToast(mensaje) {
    const toast = $("#toast");
    if (!toast) return;

    toast.textContent = mensaje;
    toast.classList.add("visible");

    clearTimeout(temporizadorToast);
    temporizadorToast = setTimeout(() => toast.classList.remove("visible"), 2200);
}

// ==========================================
//   PERSISTENCIA
// ==========================================
function guardarCarrito() {
    localStorage.setItem(CLAVE_STORAGE, JSON.stringify(carrito));
}

function cargarCarrito() {
    try {
        return JSON.parse(localStorage.getItem(CLAVE_STORAGE)) || [];
    } catch (e) {
        return [];
    }
}

// ==========================================
//   MODO OSCURO
// ==========================================
function iniciarTema() {
    const guardado = localStorage.getItem(CLAVE_TEMA);
    const btn = $("#btnModo");

    if (guardado === "oscuro") {
        document.body.classList.add("oscuro");
        if (btn) btn.textContent = "☀️";
    }

    if (btn) {
        btn.addEventListener("click", () => {
            const oscuro = document.body.classList.toggle("oscuro");
            btn.textContent = oscuro ? "☀️" : "🌙";
            localStorage.setItem(CLAVE_TEMA, oscuro ? "oscuro" : "claro");
        });
    }
}

// ==========================================
//   CURSOR PERSONALIZADO
// ==========================================
function iniciarCursor() {
    const punto  = $("#cursorPunto");
    const anillo = $("#cursorAnillo");
    if (!punto || !anillo) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let mx = 0, my = 0, ax = 0, ay = 0;

    document.addEventListener("mousemove", (e) => {
        mx = e.clientX;
        my = e.clientY;
        punto.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    });

    (function seguir() {
        ax += (mx - ax) * 0.16;
        ay += (my - ay) * 0.16;
        anillo.style.transform = `translate(${ax}px, ${ay}px) translate(-50%, -50%)`;
        requestAnimationFrame(seguir);
    })();

    document.addEventListener("mouseover", (e) => {
        if (e.target.closest("a, button, .producto, input, select, .imagen-producto")) {
            anillo.classList.add("crecido");
        }
    });

    document.addEventListener("mouseout", (e) => {
        if (e.target.closest("a, button, .producto, input, select, .imagen-producto")) {
            anillo.classList.remove("crecido");
        }
    });
}

// ==========================================
//   PARALLAX + SCROLL (burbujas, collage, sello, header, barra)
// ==========================================
function iniciarScroll() {
    const header   = $("#header");
    const barra    = $("#barraScroll");
    const burbujas = $$(".burbuja");
    const flotas   = $$(".flota");
    const sello    = document.querySelector(".sello");

    let ticking = false;

    function actualizar() {
        const y = window.scrollY;

        if (header) header.classList.toggle("compacto", y > 60);

        if (barra) {
            const alto = document.documentElement.scrollHeight - window.innerHeight;
            barra.style.width = (alto > 0 ? (y / alto) * 100 : 0) + "%";
        }

        burbujas.forEach((b, i) => {
            const vel = (i + 1) * 0.06;
            b.style.transform = `translateY(${y * vel}px)`;
        });

        flotas.forEach(f => {
            const vel = parseFloat(f.dataset.vel) || 0.08;
            f.style.transform = `translateY(${-y * vel * 6}px)`;
        });

        if (sello) sello.style.transform = `translateY(${y * -0.05}px)`;

        ticking = false;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(actualizar);
            ticking = true;
        }
    }, { passive: true });

    actualizar();
}

// ==========================================
//   REVELAR AL SCROLL
// ==========================================
function iniciarRevelar() {
    const elementos = $$(".revelar");
    if (!("IntersectionObserver" in window)) {
        elementos.forEach(el => el.classList.add("visible"));
        return;
    }

    const obs = new IntersectionObserver((entradas) => {
        entradas.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add("visible");
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });

    elementos.forEach(el => obs.observe(el));
}

// ==========================================
//   TILT 3D
// ==========================================
function activarTilt() {
    if (window.matchMedia("(hover: none)").matches) return;

    $$(".producto").forEach((tarjeta) => {
        tarjeta.addEventListener("mousemove", (e) => {
            const r = tarjeta.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width  - 0.5;
            const y = (e.clientY - r.top)  / r.height - 0.5;

            tarjeta.style.transform =
                `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 9}deg) translateY(-10px)`;
        });

        tarjeta.addEventListener("mouseleave", () => {
            tarjeta.style.transform = "";
        });
    });
}

// ==========================================
//   CONFETI
// ==========================================
let confetiRAF = null;

function lanzarConfeti() {
    const canvas = $("#confeti");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = window.innerWidth  * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);

    canvas.classList.add("activo");

    const colores = ["#9e1b32", "#f3a6b5", "#f8c8d0", "#d4a373", "#fff8f6"];
    const piezas = [];

    for (let i = 0; i < 160; i++) {
        piezas.push({
            x: Math.random() * window.innerWidth,
            y: -20 - Math.random() * 200,
            w: 6 + Math.random() * 8,
            h: 8 + Math.random() * 10,
            vy: 2 + Math.random() * 4,
            vx: -1.5 + Math.random() * 3,
            rot: Math.random() * Math.PI,
            vr: -0.15 + Math.random() * 0.3,
            color: colores[Math.floor(Math.random() * colores.length)]
        });
    }

    const inicio = performance.now();

    function dibujar(ahora) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        piezas.forEach(p => {
            p.y   += p.vy;
            p.x   += p.vx;
            p.rot += p.vr;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });

        if (ahora - inicio < 3200 && piezas.some(p => p.y < window.innerHeight + 40)) {
            confetiRAF = requestAnimationFrame(dibujar);
        } else {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            canvas.classList.remove("activo");
            cancelAnimationFrame(confetiRAF);
        }
    }

    cancelAnimationFrame(confetiRAF);
    confetiRAF = requestAnimationFrame(dibujar);
}

// ==========================================
//   NEWSLETTER
// ==========================================
function suscribir(e) {
    e.preventDefault();
    const input = $("#emailNewsletter");
    if (!input || !input.value.trim()) return;

    mostrarToast("♡ ¡Gracias por unirte al club! Revisa tu correo.");
    lanzarConfeti();
    input.value = "";
}

// ==========================================
//   NAVEGACIÓN Y CATEGORÍAS
// ==========================================
function iniciarNavegacion() {
    // Enlaces del header y footer con data-cat
    $$("a[data-cat]").forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            e.preventDefault();
            const cat = enlace.dataset.cat;

            if (cat === "todos") {
                mostrarTodos();
            } else {
                filtrarProductos(cat, null);
            }

            $("#catalogo").scrollIntoView({ behavior: "smooth" });
        });
    });

    // Botones de categoría
    $$(".botones-categorias button").forEach(boton => {
        boton.addEventListener("click", () => {
            filtrarProductos(boton.dataset.cat, boton);
        });
    });
}

// ==========================================
//   CIERRE CON ESC
// ==========================================
function iniciarAtajos() {
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            cerrarCarrito();
            cerrarModal();
        }
    });
}

// ==========================================
//   LOADER
// ==========================================
function iniciarLoader() {
    const loader = $("#loader");
    const ocultar = () => {
        if (loader) loader.classList.add("oculto");
        document.body.classList.remove("cargando");
    };

    if (document.readyState === "complete") {
        setTimeout(ocultar, 500);
    } else {
        window.addEventListener("load", () => setTimeout(ocultar, 500));
    }
}

// ==========================================
//   HERO · CONTADORES ANIMADOS
// ==========================================
function animarStats() {
    const stats = $$(".banner-stats strong");
    if (!stats.length) return;

    const valores = [70, 4.9, 24];
    const sufijos = ["+", "★", "h"];
    const decimales = [0, 1, 0];

    stats.forEach((el, i) => {
        const fin = valores[i];
        const dec = decimales[i];
        const suf = sufijos[i];
        const duracion = 1400;
        const inicio = performance.now();

        function paso(ahora) {
            const t = Math.min((ahora - inicio) / duracion, 1);
            const suave = 1 - Math.pow(1 - t, 3);
            el.textContent = (fin * suave).toFixed(dec) + suf;
            if (t < 1) requestAnimationFrame(paso);
        }

        requestAnimationFrame(paso);
    });
}

// ==========================================
//   INICIO
// ==========================================
function iniciar() {
    iniciarLoader();
    iniciarTema();
    iniciarCursor();
    iniciarScroll();
    iniciarRevelar();
    iniciarNavegacion();
    iniciarAtajos();

    mostrarTodos();
    actualizarCarrito();
    animarStats();
}

document.addEventListener("DOMContentLoaded", iniciar);
