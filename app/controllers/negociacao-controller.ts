import { DiaDaSemana } from './../enums/dias-da-semana.js';
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

    public adiciona(): void{
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )
        if(!this.ehDiaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        this.negociacoes.adicionar(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }

    private limparFormulario(): void{
        this.inputData.value = '';
        this.inputValor.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }

    private ehDiaUtil(data: Date): boolean{
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }

}