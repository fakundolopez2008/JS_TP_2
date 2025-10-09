function mostrarCarrito(){
  const carritoExiste = document.querySelector(".carritoFlotante");
  if (carritoExiste) {
    carritoExiste.remove();
    return;
  }
  const carritoLocal = JSON.parse(localStorage.getItem("carrito")) || [];
  const carritoListado = document.createElement("div");
  carritoListado.classList.add("carritoFlotante");
  document.body.appendChild(carritoListado);
  if (carritoLocal.length === 0) {
    carritoListado.innerHTML = "<p>El carrito está vacío</p>";
  } else {
    carritoLocal.forEach((producto) => {
      const item = document.createElement("article");
      item.classList.add("itemCarrito");
      item.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Medida: ${producto.medida}</p>
        <p>Precio: $${producto.precio}</p>`;
    carritoListado.appendChild(item);
    });

  const contenedorBotones = document.createElement("div");
  contenedorBotones.classList.add("botonesCarrito");

    const btnLimpiar = document.createElement("button");
      btnLimpiar.innerText = "Vaciar carrito";
      btnLimpiar.classList.add("btn-limpiar");
      carritoListado.appendChild(btnLimpiar);

    const btnPagar = document.createElement("button");
      btnPagar.innerText = "Pagar";
      btnPagar.classList.add("btn-pagar");

    contenedorBotones.appendChild(btnLimpiar);
    contenedorBotones.appendChild(btnPagar);
    carritoListado.appendChild(contenedorBotones);

    btnLimpiar.addEventListener("click", () => {
      Swal.fire({
        title: "¿Vaciar carrito?",
        text: "Esta acción eliminará todos los productos del carrito.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#009f57",
        cancelButtonColor: "#ff5252",
        confirmButtonText: "Sí, vaciar",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("carrito");
          carritoListado.remove();
          carritoLista.length = 0;
          contador.innerText = `Carrito (${carritoLista.length})`;

          Swal.fire({
            title: "Carrito eliminado",
            text: "Tu carrito se vació correctamente.",
            icon: "success",
            confirmButtonColor: "#009f57"
          });
        }
      });
    });
    btnPagar.addEventListener("click", () => {
      Swal.fire({
      title: "MUCHAS GRACIAS POR SU COMPRA",
      text: "Gracias profe por haber corregido mi pagina. Espero que le haya gustado :)",
      icon: "success",
      confirmButtonText: "Aceptar"
      });
    });
  }
}
const botones = document.querySelectorAll("#agregar");
const contador = document.querySelector("#contador");
const carritoDiv = document.querySelector("#carrito");

let carritoLista = JSON.parse(localStorage.getItem("carrito")) || [];

contador.innerText = `Carrito (${carritoLista.length})`;


$.getJSON("./data/productos.json")
  .done(function(data) {
    botones.forEach((boton,index) => {
      boton.addEventListener("click", () => {
        carritoLista.push(data[index]);
        contador.innerText = `Carrito (${carritoLista.length})`;
        localStorage.setItem("carrito", JSON.stringify(carritoLista));
        Toastify({
          text: "Producto agregado al carrito",
          duration: 3000,
          gravity: "bottom",
          position: "right",
          style: {
            background: "linear-gradient(to right, #177d4fff, #52950aff, #177d4fff)", // 🌈 gradiente
            borderRadius: "8px",
            color: "#fff",
            fontWeight: "bold"
          }
        }).showToast();
      });
    });
  })
  .fail(function(error) {
    Swal.fire({
      title: "ERROR 404",
      text: "No se ha podido obtener la lista de productos. Favor de avisar al administrador.",
      icon: "error",
      confirmButtonText: "Aceptar"
    });
  });
  
carritoDiv.addEventListener("click", () => {
  mostrarCarrito();
});