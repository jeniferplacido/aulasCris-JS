let tarefa = [];

function addTarefa(tarefaDescricao) {
  const id = tarefa.length + 1;
  tarefa.push({ id, tarefaDescricao });
  console.log(`Tarefa ${tarefaDescricao} adicionada com ID ${id}`);
  promptUsuario();
}
// 
function editarTarefa(id, newTarefaDescricao) {
  let tarefa = tarefa.find((tarefa) => tarefa.id === id);
  if (tarefa) {
    tarefa.tarefaDescricao = newTarefaDescricao;
    console.log(`Tarefa com ID ${id} editada para ${newTarefaDescricao}`);
  } else {
    console.log(`Tarefa com ID ${id} não encontrada.`);
  }
  promptUsuario();
}

function removerTarefa(id) {
  const tamanhoInicial = tarefa.length;
  id = parseInt(id);
  tarefa = tarefa.filter((tarefa) => tarefa.id !== id);
  if (tarefa.length < tamanhoInicial) {
    console.log(`Tarefa com ID ${id} removida com sucesso.`);
  } else {
    console.log(`Tarefa com ID ${id} não encontrada.`);
  }
  promptUsuario();
}

function listarTarefas() {
  console.log("lista de tarefas:");
  tarefa.forEach((tarefa) => {
    console.log(`ID: ${tarefa.id} - Descrição: ${tarefa.tarefaDescricao}`);
  });
  promptUsuario();
}

function listarTarefaPorId(id) {
  let listarTarefa = tarefa.find((tarefa) => tarefa.id === id);
  if (listarTarefa) {
    console.log(
      `ID: ${listarTarefa.id} - Descrição: ${listarTarefa.tarefaDescricao}`
    );
  } else {
    console.log(`Tarefa com ID ${id} não encontrada.`);
  }
  promptUsuario();
}
function promptUsuario() {
  console.log("Opções:");
  console.log("1. Adicionar tarefa");
  console.log("2. Editar tarefa");
  console.log("3. Remover tarefa");
  console.log("4. Listar tarefas");
  console.log("5. Obter tarefa por ID");
  console.log("6. Sair");

  const opcao = prompt(" Escolha uma opção:");

  switch (parseInt(opcao)) {
    case 1:
      const tarefaDescricao = prompt("Digite a descrição da tarefa:");
      addTarefa(tarefaDescricao);
      break;

    case 2:
      const editarTarefaId = prompt("Digite o id da tarefa a ser editada");
      const newTarefaDescricao = prompt("Digite a nova descrição da tarefa");
      editarTarefa(parseInt(editarTarefaId), newTarefaDescricao);
      break;
    case 3:
      const removerId = prompt("Digite oo id da tarefa a ser removida:");
      removerTarefa(removerId);
      break;

    case 4:
      listarTarefas();

    case 5:
      const listarId = parseInt(
        prompt("Digite o id da tarefa que deseja listar:")
      );
      listarTarefaPorId(listarId);
      break;

    case 6:
      console.log("programa encerrado");
      return;
    default:
      console.log("Opção invalida");
  }
}

console.log("Bem vindo ao gerenciador de tarefas");
promptUsuario();
