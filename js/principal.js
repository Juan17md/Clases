import Cl_Tienda from "./Cl_Tienda.js";
import Cl_iTienda from "./Cl_iTienda.js";
import Cl_Vendedor from "./Cl_Vendedor.js";
import Cl_iVendedor from "./Cl_iVendedor.js";
import Cl_Venta from "./Cl_Venta.js";
import Cl_iVenta from "./Cl_iVenta.js";

let tienda = new Cl_Tienda();
let iTienda = new Cl_iTienda();

for (let j = 0; j < 2; j++) {
    let iVendedor = new Cl_iVendedor(),
        c = iVendedor.leerCedula(),
        n = iVendedor.leerNombre(),
        nv = iVendedor.leerNumeroVentas();
    let vendedor = new Cl_Vendedor(c, n, nv);

    for (let i = 0; i < vendedor.numeroVentas; i++) {
        let iVenta = new Cl_iVenta(),
            mV = iVenta.leerMontoVenta(),
            t = iVenta.leerTipoVenta(),
            venta = new Cl_Venta(mV, t);

        vendedor.procesarVentas(venta);
    }

    let salida = document.getElementById("salida");
    salida.innerHTML += iVendedor.reporteVendedor(vendedor.totalVendido().toFixed(2), vendedor.porcentajeVentasConatdo().toFixed(2), vendedor.cantidadVentas100_400());

    tienda.procesarVendor(vendedor);
}

let salida = document.getElementById("salida");
salida.innerHTML += iTienda.reporteTienda(tienda.cantidadVentasContado())