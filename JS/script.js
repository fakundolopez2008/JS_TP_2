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
      

function mostrarCarritoVacio(carritoItems){
    const listaCarrito = document.createElement("article");
    listaCarrito.classList.add("carritoFlotante");
    listaCarrito.innerHTML= `<p>El carrito está vacío</p>`;
      carritoItems.appendChild(listaCarrito);
      carrito.addEventListener("mouseout", () => {
      listaCarrito.remove();
  })
}

$.getJSON("./data/productos.json")
  .done(function(data) {
    console.log("Datos cargados:", data);
    let carrito = [];
    const botones = document.querySelectorAll("#agregar");
    const contador = document.querySelector("#contador");
    const carritoDiv = document.querySelector("#carrito")

    botones.forEach((boton,index) => {
      boton.addEventListener("click", () => {
        carrito.push(data[index]);
        contador.innerText = `Carrito (${carrito.length})`;
      });
    });
    carritoDiv.addEventListener("mouseover", () => {
      if(carrito.length === 0){
          mostrarCarritoVacio(carrito);
        } else{        
            mostrarCarrito(carrito);
          }
      }  
    );
  })
  .fail(function(error) {
    console.error("Error al cargar los datos:", error);
  });