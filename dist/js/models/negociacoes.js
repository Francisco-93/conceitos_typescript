export class Negociacoes {
    constructor() {
        this.negociacoes = [];
        //   listar(): ReadonlyArray<Negociacao>{
        // return [...this.negociacoes];  ----> cria uma nova lista passando item a item para a outra lista
        //      return this.negociacoes;
        //   }
    }
    //Array<Negociacao> = Negociacao[]
    adicionar(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listar() {
        // return [...this.negociacoes];  ----> cria uma nova lista passando item a item para a outra lista
        return this.negociacoes;
    }
}
