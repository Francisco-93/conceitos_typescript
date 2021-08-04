import { Negociacoes } from "../models/negociacoes.js";

export abstract class View<T>{

    protected element: HTMLElement;
    constructor(seletorCSS: string){
        this.element = document.querySelector(seletorCSS);
    }

    public update(negociacoes: T): void{
        const template = this.template(negociacoes);
        console.log(template);
        this.element.innerHTML = template;
    }

    protected abstract template(modelo: T): string;
}