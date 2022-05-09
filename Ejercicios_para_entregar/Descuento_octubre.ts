let cantProducto: number = Number(prompt("Ingrese la cantidad de prendas"));
let precioProducto: number = Number(prompt("Ingrese el precio de la prenda"));

let descuento: number = 0;
let montoConDescuento: number = 0;
let montoCompra: number = 0;

let mes: number = Number(prompt("ingrese el mes de la compra en número"));

montoCompra = cantProducto * precioProducto;
descuento = montoCompra * 0.15;
montoConDescuento = montoCompra - descuento;

if (mes == 10) {
  console.log(
    "por comprar en el mes de octubre, la compra tiene un 15% de descuento"
  );
  console.log("el monto con descuento a pagar es ", montoConDescuento);
} else {
  console.log("la compra no tiene descuento");
}
