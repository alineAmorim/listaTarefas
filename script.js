// minha solução
/*
function inserirItem() {
    event.preventDefault();
    console.log('inserirItem')
    let minhaLista = document.getElementById('minhaLista');
    let esteItem = document.getElementById('itemLista').value;

    let novaLinha = document.createElement('li')
    novaLinha.innerHTML = esteItem;

    // outra forma de fazer
    // let textoLinha = document.createTextNode(esteItem);
    // novaLinha.appendChild(textoLinha);



    let novoBotao = document.createElement('button');
    novoBotao.innerHTML = 'Remover';
    novoBotao.className = 'botaoRemover';
    novoBotao.addEventListener('click', removerItem)

    novaLinha.appendChild(novoBotao);
    minhaLista.appendChild(novaLinha);

}

function removerItem() {
    // this.parentElement.style.display = 'none';
    this.parentElement.remove();

}
*/

// criar tres elementos para lista (ul) input e button com querySeletor diretamente da div principal #app
let listaElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

// criar lista tarefas - array
let listaTarefas = JSON.parse(localStorage.getItem('@listaTarefas')) || [];




// criar funcao para renderizar tarefas
// limpar a lista com innerHtml
// percorrer a listaTarefas com a funcao .map, criando uma funçao anonima com um argumento para cada item dentro dela
// criar um elemento 'li' com eoutro elemento com o texto do item. adicionar o texto no 'li' e depois colocar o elemento completo na lista
function renderizarTarefas() {
    listaElement.innerHTML = '';
    listaTarefas.map((item) => {
        // console.log(item)
        let liElement = document.createElement('li');
        let texto = document.createTextNode(item);

        let liButtonElement = document.createElement('button');
        let liTextButton = document.createTextNode('Remover');
        liButtonElement.className = 'liButton';
        liButtonElement.appendChild(liTextButton);
        liElement.appendChild(texto);
        liElement.appendChild(liButtonElement);
        listaElement.appendChild(liElement);

        // para fazer a funcao externa pode ser
        // liButtonElement.setAttribute('onclick', `nomeDaFuncao(${auxPosition})`)    

        liButtonElement.onclick = function () {
            // console.log(item)
            let auxPosition = listaTarefas.indexOf(item);
            console.log(listaTarefas[auxPosition]);
            listaTarefas.splice(auxPosition, 1);
            console.log(listaTarefas);

            renderizarTarefas();

        }

       



    });
    salvarDados();
}



renderizarTarefas();

// adicionar a acao de click em button e chamar função diretamente no javascript
/*
criar a função para adicionar itens no array tarefas.
verificar se esta vazio e retorna vazio caso positivo
senao, adicione nova tarefa no array e limpe o campo input e chame a funcao de renderizar lista
*/
buttonElement.addEventListener('click', (event) => {
    let tarefa = inputElement.value;
    if (tarefa.replace(' ', '').length === 0) {

        return false;
    } else {
        listaTarefas.push(tarefa);
        inputElement.value = '';
        renderizarTarefas();

    }
});



// forma mostrada na aula
// function adicionarTarefas(){}
// buttonElement.addEventListener('click', adicionarTarefas);


function salvarDados(){
    localStorage.setItem('@listaTarefas', JSON.stringify(listaTarefas));
}

