// Criar um programa que permite ao usuário inserir tarefas a fazer e marcá-las como feitas.
// 1- O usuário deve inserir a tarefa em um input de texto e clicar em um botão para inseri-la
// 2- As tarefas inseridas deve ser listadas na tela
// 3- Ao clicar em uma tarefa da lista, deve-se riscá-la como feita (text-decoration: line-through)
// 4- Inserir um botão que limpa a lista de tarefas

var app = angular.module('todolist', []);

app.controller ('taskControl', function($scope){
  $scope.listaTarefas = [];
  $scope.inserir = {};

  $scope.saveTask = function(){
    //essa tarefa está só nessa função e não no scope
    //não tem nada a ver com o tarefa do html
    var tarefa = {
      nome : $scope.inserir.naLista,
      feito : false
    };

// Aqui eu coloco um if para evitar que uma tarefa seja adicionada caso a caixa estiver vazia
    if(tarefa.nome != ""){
      $scope.listaTarefas.push(tarefa);//push adiciona na áultima posição do vetor
      $scope.inserir.naLista = "";
    }



    // console.log($scope.listaTarefas)
  }

// Aqui o nome da variável criada tem que ser diferente do xpto in xyz
  $scope.taskFeita = function(cumprida){
    cumprida.feito = true;
  }

  $scope.limparTask = function(){
    $scope.listaTarefas = [];
  }

});
