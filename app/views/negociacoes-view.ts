import { View } from './view.js';
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView extends View<Negociacoes>{

    protected template(negociacoes: Negociacoes): string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${negociacoes.listar().map(obj => {
                    return `
                        <tr>
                            <td>${this.formatar(obj.data)}</td>
                            <td>${obj.quantidade}</td>
                            <td>${obj.valor}</td>
                        </tr>
                    `   
                }).join('')}
            </tbody>
        </table>    
        `;
    }

    private formatar(data: Date): string{
        return new Intl.DateTimeFormat().format(data);
    }

}