function AgroQuimico (nombre, medida, precio){
    this.nombre = nombre;
    this.medida = medida;
    this.precio = precio;
}
function mostrarCarrito(carritoItems,contadorItems){
    const listaCarrito = document.createElement("section");
    listaCarrito.classList.add("carrito-flotante");
    carritoItems.map((item) => {
    listaCarrito.innerHTML= `<article class="producto">
        <img src="./images/glifosato.png" alt="Agroquímico 1">
        <h3>Glifosato</h3>
        <p>Medida: 1 litro</p>
        <p>Precio: $1500</p>
      </article>`
    });
      contadorItems.appendChild(listaCarrito);
    
}

const productos = [
  new AgroQuimico("Glifosato", "1 litro", 1500, "./images/glifosato.png"),
  new AgroQuimico("Atrazina", "1 litro", 2000, "./images/atrazina-01.jpg"),
  new AgroQuimico("Clorpirifos", "1 litro", 2500, "./images/22222-35601.jpg"),
  new AgroQuimico("Paraquat", "1 litro", 1800, "./images/PARAQUAT-VECOL.png"),
  new AgroQuimico("2,4-D", "1 litro", 2200, "./images/2_4_d_action.jpg"),
  new AgroQuimico("Metamidofós", "1 litro", 3000, "./images/Modelo-3D-Metamidofos.jpg"),
];

let carrito = [];
const botones = document.querySelectorAll("#agregar");
const contador = document.querySelector("#contador");

botones.forEach((boton,index) => {
  boton.addEventListener("click", () => {
    carrito.push(productos[index]);
    contador.innerText = `Carrito ${carrito.length}`;
  });
});

contador.addEventListener("click", () => {
if(carrito.length > 0){
      mostrarCarrito(carrito,contador);
    } else{
        alert("El carrito está vacío");
      }
  }
);