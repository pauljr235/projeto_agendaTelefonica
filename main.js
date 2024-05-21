const form = document.getElementById('form-projeto');
const nomes = [];
const numeros = [];


let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
})

function adicionarLinha(){
    const inputNomeDoContato = document.getElementById('nome-contato');
    const inputNumeroDoContato = document.getElementById('numero-contato');

    if(nomes.includes(inputNomeDoContato.value)){
        alert(`O nome ${inputNomeDoContato.value} já foi inserido na agenda!`);

    } else if(numeros.includes(inputNumeroDoContato.value)){
        alert(`O número ${inputNumeroDoContato.value} já foi inserido na agenda!`);
        
    } else{
        nomes.push(inputNomeDoContato.value);
        numeros.push(inputNumeroDoContato.value);
    
        let linha = '<tr>';
        linha += `<td> ${inputNomeDoContato.value}</td>`;
        linha += `<td> ${inputNumeroDoContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;    
    
        const corpoTabela = document.querySelector('tbody'); /* atualiza a tabela com os inputs do usuário*/
        corpoTabela.innerHTML = linhas; /* atualiza a tabela com os inputs do usuario*/
        
        inputNomeDoContato = '';
        inputNumeroDoContato = '';
    }
        
    }

