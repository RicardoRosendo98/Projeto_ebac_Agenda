const form = document.getElementById('form-contact');
const imgCheck = '<img src="/imagens/check_icon_green.png" alt="Icon check">';
const nomeContato = [];
const numeroContato = [];

let linhas = ''; 

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('contato-nome');
    const inputNumeroContato = document.getElementById('numero-contato');
 
    if (numeroContato.includes(inputNumeroContato.value)) {
        alert(`O numero: ${inputNumeroContato.value} já existe`);
    } else {
        nomeContato.push(inputNomeContato.value);
        numeroContato.push(inputNumeroContato.value);
        
        let linha = '<tr>';
    linha  += `<td>${inputNomeContato.value}</td>`;
    linha  += `<td>${inputNumeroContato.value}</td>`;
    linha  += `<td>${inputNumeroContato.value = imgCheck}</td>`;
    linha += '</tr>';
    
    linhas += linha;
}

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}