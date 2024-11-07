export default class Cl_iVendedor {
    leerCedula() {
        return prompt("Introduzca la cedula de vendedor: ")
    }

    leerNombre() {
        return prompt("Introduzca el nombre del vendedor: ")
    }

    leerNumeroVentas() {
        return prompt("Introduzca el numero de ventas: ")
    }

    reporteVendedor(totalVendido, porcentaje, cantidad) {
        return `
        <br><br>Reporte Del Vendedor<br>
        <br>Total vendido: $ ${totalVendido}
        <br>Porcenta de ventas de contado: ${porcentaje}% 
        <br>Cantidad de ventas entre 100 y 400: ${cantidad}
        `
    }
}

