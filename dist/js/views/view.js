export class View {
    constructor(seletorCSS) {
        this.element = document.querySelector(seletorCSS);
    }
    update(negociacoes) {
        const template = this.template(negociacoes);
        console.log(template);
        this.element.innerHTML = template;
    }
    template(modelo) {
        throw Error('Classe filha precisa implementar o método de View');
    }
}
