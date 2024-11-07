export default class Cl_Tienda {
    constructor() {
        this.acumVentasContado = 0;
    }

    procesarVendor(vendedor) {
        // acumular las ventas de contado de todos los vendedores
        this.acumVentasContado += vendedor.cntContado;
    }

    cantidadVentasContado() {
        return this.acumVentasContado;
    }
}