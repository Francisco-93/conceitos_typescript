import { Negociacoes } from "../models/negociacoes.js";

export abstract class View<T>{

    protected element: HTMLElement;
    private escapar = false;

    //Parâmetros opcionais SEMPRE devem vir por último
    constructor(seletorCSS: string, escapar?: boolean){
        this.element = document.querySelector(seletorCSS);
    }

    public update(negociacoes: T): void{
        let template = this.template(negociacoes);
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }

    protected abstract template(modelo: T): string;
}