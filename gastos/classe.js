class Orcamento {
    constructor(valor) {
        this.valor = valor
    }

    debito(valorGasto) {
        this.gasto = valorGasto
        this.valor = this.valor - valorGasto
    }

    credito(valor) {
        this.aumento = valor
        this.valor = this.valor + valor
    }
}

const orcamento = new Orcamento(1000)
orcamento.debito(50)
orcamento.credito(1500)
console.log(orcamento.aumento)