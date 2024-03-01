// Selecionando um elemento pelo ID
const contentDiv = document.getElementById('content');

// Modificando o conteúdo do elemento
contentDiv.innerHTML = '<h1>Hello, New World!</h1><p>Vamos modificar o paragrafo</p>';

// Criando um novo elemento
const novoParagrafo = document.createElement('p');
novoParagrafo.textContent = 'Este é um parágrafo criado dinamicamente.';
contentDiv.appendChild(novoParagrafo);

const novoParagrafo2 = document.createElement('p');
novoParagrafo2.textContent = 'Este é um segundo parágrafo criado dinamicamente.';

// Adicionando o novo elemento ao DOM
contentDiv.appendChild(novoParagrafo2);
