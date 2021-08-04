import { Negociacao } from './negociacao.js';
export class Negociacoes{

    private negociacoes: Array<Negociacao> = [];

    //Array<Negociacao> = Negociacao[]

    adicionar(negociacao: Negociacao): void{
        this.negociacoes.push(negociacao);
    }

    listar(): readonly Negociacao[]{
        // return [...this.negociacoes];  ----> cria uma nova lista passando item a item para a outra lista
        return this.negociacoes;
     }

 //   listar(): ReadonlyArray<Negociacao>{
       // return [...this.negociacoes];  ----> cria uma nova lista passando item a item para a outra lista
 //      return this.negociacoes;
 //   }

}