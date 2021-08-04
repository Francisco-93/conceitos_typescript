import { View } from './view.js';
export class NegociacoesView extends View {
    template(negociacoes) {
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
                            <td>${new Intl.DateTimeFormat().format(obj.data)}</td>
                            <td>${obj.quantidade}</td>
                            <td>${obj.valor}</td>
                        </tr>
                    `;
        }).join('')}
            </tbody>
        </table>    
        `;
    }
}
