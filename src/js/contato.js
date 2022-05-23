/*var = serve escopo global
  let = serve para escopo local
  const= serve para escopo global, mas o valor não muida, ele é fixo. Constante


var nome = "turma 49"

function hello(){
  
  alert(nome + " está aprendendo js")
}*/

/*consultando a Dom*/

let nome = window.document.getElementById('nome')/*primeiro acessamos a window q tem o acesso geral, depois acessamos a document e dps a tag html pel id */ 
let email = document.getElementById('email') /*como a window sempre tem acesso a tudo, ela pode ser ocultada na consulta e partimos apenas da document*/
let assunto = document.getElementById('assunto')/*acessando pelo nome*/

function verifica(){
  if(nome.value == "" || email.value == "" || assunto.value == ""){
      alert("Todos os campos devem ser preenchidos")
      return false
  }
  return true
}

function enviar(){
  if(verifica()){
    alert(`Olá! ${nome.value}! Foi enviada uma cópia do formulário para ${email.value}` )
  }
}