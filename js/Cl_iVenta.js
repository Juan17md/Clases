export default class Cl_iVenta {
    leerMontoVenta() {
        return prompt("Ingrese el monto de la venta: ");
    }

    leerTipoVenta() {
        return prompt("Introduzca el tipo de la venta: \n 1. Contado \n 2. Credito")
    }
}