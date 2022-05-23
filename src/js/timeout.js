
let tempo = document.getElementById('tempo')
let espaco = document.getElementById('espaco')
//manipulando o tempo

function insereHTML(){
  tempo.innerHTML = 'Conteudo inserido'
}

function tempoMsg(){
  setTimeout("insereHTML()",2000);
}

//pegando a url

function espacoMsg(){
  let location = window.location.href
  espaco.innerHTML = location
}


//dark theme
// Dark Theme
function darkTheme(){
  document.body.classList.toggle('dark-theme')
}
