import { Negociacao } from './negociacao.js';
export class Negociacoes{

    private negociacoes: Array<Negociacao> = [];

    //Array<Negociacao> = Negociacao[]

    public adicionar(negociacao: Negociacao): void{
        this.negociacoes.push(negociacao);
    }

    public listar(): readonly Negociacao[]{
        // return [...this.negociacoes];  ----> cria uma nova lista passando item a item para a outra lista
        return this.negociacoes;
     }

 //   listar(): ReadonlyArray<Negociacao>{
       // return [...this.negociacoes];  ----> cria uma nova lista passando item a item para a outra lista
 //      return this.negociacoes;
 //   }

}