import { Negociacoes } from "../models/negociacoes.js";

export abstract class View<T>{

    protected element: HTMLElement;
    constructor(seletorCSS: string){
        this.element = document.querySelector(seletorCSS);
    }

    update(negociacoes: T): void{
        const template = this.template(negociacoes);
        console.log(template);
        this.element.innerHTML = template;
    }

    template(modelo: T): string{
        throw Error('Classe filha precisa implementar o método de View');
    }
}