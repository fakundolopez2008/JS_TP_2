function AgroQuimico (nombre, medida, precio){
    this.nombre = nombre;
    this.medida = medida;
    this.precio = precio;
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
const botones = document.querySelectorAll("button");
let contador = document.querySelector("#contador");
botones.forEach((boton,index) => {
  boton.addEventListener("click", () => {
    carrito.push(productos[index]);
    contador.innerText = carrito.length;
    console.log(carrito);
  });
});

