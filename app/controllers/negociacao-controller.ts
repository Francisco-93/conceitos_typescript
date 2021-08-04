import { MensagemView } from './../views/mensagem-view.js';
import { NegociacoesView } from './../views/negociacoes-view.js';
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController{
    
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negociacoes: Negociacoes = new Negociacoes();

    constructor(){
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
        this.negociacoesView.update(this.negociacoes)
    }

    adiciona(): void{
        const negociacao = this.criaNegociacao();
        this.negociacoes.adicionar(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
        this.limparFormulario();
    }

    criaNegociacao(): Negociacao{
        //const exp = /-/g;
        const date = new Date(this.inputData.value);
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseInt(this.inputValor.value);

        return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void{
        this.inputData.value = '';
        this.inputValor.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

}