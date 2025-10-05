function AgroQuimico (nombre, medida, precio, imagen){
    this.nombre = nombre;
    this.medida = medida;
    this.precio = precio;
    this.imagen = imagen;
}

function mostrarCarrito(carritoItems,contadorItems){
  carritoItems.forEach((productos) => {
    const listaCarrito = document.createElement("article");
    listaCarrito.classList.add("carritoFlotante");
      listaCarrito.innerHTML= `<img src="${productos.imagen}" alt="${productos.nombre}">
        <h3>${productos.nombre}</h3>
        <p>Medida: ${productos.medida}</p>
        <p>Precio: $${productos.precio}</p>`;
      contadorItems.appendChild(listaCarrito);
    });
  }  
      

function mostrarCarritoVacio(contadorItems){
    const listaCarrito = document.createElement("article");
    listaCarrito.classList.add("carritoFlotante");
    listaCarrito.innerHTML= `<article>
      <p>El carrito está vacío</p>
      </article>`;
      contadorItems.appendChild(listaCarrito);
      contador.addEventListener("mouseout", () => {
      listaCarrito.remove();
  })
}

$.getJSON("./data/productos.json")
  .done(function(data) {
    console.log("Datos cargados:", data);
    let carrito = [];
    const botones = document.querySelectorAll("#agregar");
    const contador = document.querySelector("#contador");

    botones.forEach((boton,index) => {
      boton.addEventListener("click", () => {
        carrito.push(data[index]);
        contador.innerText = `Carrito (${carrito.length})`;
      });
});

contador.addEventListener("mouseover", () => {
  if(carrito.length === 0){
      mostrarCarritoVacio(contador);
    } else{        
        mostrarCarrito(carrito,contador);
      }
  }  
);
  })
  .fail(function(error) {
    console.error("Error al cargar los datos:", error);
  });

