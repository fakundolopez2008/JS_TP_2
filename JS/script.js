function AgroQuimico (nombre, medida, precio){
    this.nombre = nombre;
    this.medida = medida;
    this.precio = precio;
}
function mostrarCarrito(carritoItems,contadorItems){
  if(carritoItems.length > 0){
    contadorItems.addEventListener("click", () => {
    const listaCarrito = document.createElement("article");
    listaCarrito.innerHTML= `<img src="./images/glifosato.png" alt="Agroquímico 1">
        <h3>Glifosato</h3>
        <p>Medida: 1 litro</p>
        <p>Precio: $1500</p>`
        listadoCarrito.appendChild(listaCarrito);
    });
  } else if(carritoItems.length === 0){
    contadorItems.addEventListener("click", () => {
      alert("El carrito está vacío");
    });
  }
}

const productos = [
new AgroQuimico ("Glifosato", "1 litro", 1500),
new AgroQuimico ("Atrazina", "1 litro", 2000),
new AgroQuimico ("Clorpirifos", "1 litro", 2500),
new AgroQuimico ("Paraquat", "1 litro", 1800),
new AgroQuimico ("2,4-D", "1 litro", 2200),
new AgroQuimico ("Metamidofós", "1 litro", 3000),
];

let carrito = [];
const botones = document.querySelectorAll("#agregar");
const contador = document.querySelector("#contador");

botones.forEach((boton,index) => {
  boton.addEventListener("click", () => {
    carrito.push(productos[index]);
    contador.innerText = `Carrito ${carrito.length}`;
    console.log(carrito);
  });
});

mostrarCarrito(carrito,contador);