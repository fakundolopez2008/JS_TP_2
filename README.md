Tipo de pagina: Ecommerce.

La idea fue armar un Ecommerce de agroquimicos, donde los clientes pueden cargar sus productos para comprar.
La pagina ofrece la opción de pagar y limpiar el carrito, donde en este ultimo se hace la limpieza del localStorage y del array con el listado de productos.
Tambien se agregaron las librerias de JQuery (para simplificar el llamado al productos.json), Toastify (agregado al addEventListener de los botones de los productos) y SweetAlert (agregado a la lista del carrito para vaciar o realizar el pago, donde se anido la opcion de confirmación del vacio del carrito con la confirmación de esto realizado).
-- Para abrir la lista del carrito, se debe hacer click en el boton. Traté de hacerlo con Mouseover pero no pude resolverlo con esto asi que me maneje con "clicks". Un click para abrir y otro click para cerrar la lista.