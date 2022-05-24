/*var = serve escopo global
  let = serve para escopo local
  const= serve para escopo global, mas o valor não muida, ele é fixo. Constante


var nome = "turma 49"

function hello(){
  
  alert(nome + " está aprendendo js")
}*/

/*consultando a Dom*/

let nome = document.getElementById('name')/*primeiro acessamos a window q tem o acesso geral, depois acessamos a document e dps a tag html pel id */ 
let email = document.getElementById('email') /*como a window sempre tem acesso a tudo, ela pode ser ocultada na consulta e partimos apenas da document*/
let assunto = document.getElementById('assunto')/*acessando pelo nome*/

let nomeCerto = false
let emailCerto = false
let assuntoCerto = false

function validaNome(){
  let txtNome = document.getElementById('txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
        nomeCerto = false
    }else{ 
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'blue'
        nomeCerto = true
    }
}
function validaEmail(){
  let txtEmail=document.getElementById('txtEmail')
  if(email.value.indexOf('@')== -1 || email.value.indexOf('.com') == -1){
      txtEmail.innerHTML='E-mail inválido'
      txtEmail.style.color='red'
      emailCerto = false
  }else{
      txtEmail.innerHTML='E-mail válido'
      txtEmail.style.color='blue'
      emailCerto = true
  }
}
function validaAssunto(){
  let txtAssunto = document.getElementById('txtAssunto')
  if(assunto.value != ""){
    txtAssunto.textContent = '';
    assuntoCerto = true
  }else{
    assuntoCerto = false
    txtAssunto.innerHTML = 'Deve ser inserida alguma mensagem!!'
    txtAssunto.style.color = 'red'
    txtAssunto.style.fontSize = '20px'
  }
}
function enviar(){
  if(nomeCerto == true && emailCerto == true && assuntoCerto == true){
    alert(`Olá ${nome.value}! Foi enviada uma cópia do formulário para ${email.value}` )
  }else{
    alert("Algum campo está incorreto")
  }
}
