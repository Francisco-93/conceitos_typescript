export class Negociacao{
    
    constructor(
        private _data: Date,
        private  _quantidade: number,
        private _valor: number
    ){}

    /*
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    */

    //O TypeScript é inteligenete o suficiente para saber que no construtor
    //passamos os valores recebidos para os atributos da classe

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseInt(valorString);

        return new Negociacao(date, quantidade, valor);
    }
}