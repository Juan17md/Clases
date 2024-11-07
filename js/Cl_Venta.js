export default class Cl_Venta {
    constructor(monto, tipo) {
        this.monto = monto;
        this.tipo = tipo;
    }

    set monto(monto) {
        this._monto = +monto;
    }

    get monto() {
        return this._monto;
    }

    set tipo(tipo) {
        this._tipo = +tipo;
    }

    get tipo() {
        return this._tipo;
    }
}