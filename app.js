// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    input.value = ""; // Limpa o campo de entrada
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista atual

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;

        // Botão para remover o amigo
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = () => removerAmigo(index); // Passa o índice do amigo a ser removido

        li.appendChild(botaoRemover);
        listaAmigos.appendChild(li);
    });
}

// Função para remover um amigo
function removerAmigo(index) {
    amigos.splice(index, 1); // Remove o amigo do array
    atualizarListaAmigos(); // Atualiza a lista na tela
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpa o resultado anterior

    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    const li = document.createElement('li');
    li.textContent = `O amigo secreto sorteado é: ${amigoSecreto}`;
    resultado.appendChild(li);
}