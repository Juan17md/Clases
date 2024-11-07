export default class Cl_Vendedor {
    constructor(cedula, nombre, numeroVentas) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.numeroVentas = numeroVentas;
        this.acmVentas = 0.0;
        this.cntContado = 0;
        this.cnt100_400 = 0;
    }

    set cedula(cedula) {
        this._cedula = cedula;
    }

    get cedula() {
        return this._cedula;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }

    set numeroVentas(numeroVentas) {
        this._numeroVentas = +numeroVentas;
    }

    get numeroVentas() {
        this._numeroVentas;
    }

    procesarVentas(venta) {
        // acumular ventas
        this.acmVentas += venta.monto;

        // contar las ventas de contado o tipo 1 
        if (this.acmVentas.tipo == 1)
            this.cntContado++;

        // contar ventas entre 100 y 400
        if (venta.monto >= 100 && venta.monto <= 400)
            this.cnt100_400++;
    }

    porcentajeVentasConatdo() {
        return (this.cntContado / this.numeroVentas) * 100;
    }

    totalVendido() {
        return this.acmVentas;
    }

    cantidadVentas100_400() {
        return this.cnt100_400;
    }
}