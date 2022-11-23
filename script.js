// função criada para mudar o tema da página... normal ou dark (para o tema escuro)... para manipular o css
function mudaTema() {
  // document.body é a tag <body> do html que engloba todos os elementos da página... vamos atribuir uma classe para o body... que vamos criar lá no css... o js vai decidir quando troca para uma ou para outra pelo onclick do button
  document.body.classList.toggle("dark"); // classList.toggle é o comando para trocar... toogle é alternância
}