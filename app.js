let  amigos = []
const listaAmigos = document.getElementById('listaAmigos')

function adicionarAmigo(){
    let nome = document.querySelector('input').value
    if( ! nome ){
        alert('Por favor,digita um nome !')
        return
    }
    if ( amigos.includes(nome.toLocaleLowerCase())){
        alert(' O nome já foi adicionado !')
        limparFila()
    } else {
        limparFila()
        amigos.push(nome)
        console.log(amigos)
        updateAmigosContainer()
    }
}
function updateAmigosContainer(){
    limparLista()
    
    for(const amigo of amigos){
        const child = document.createElement('li')
        child.innerHTML = amigo
        listaAmigos.appendChild(child)
    }
}
function limparFila () {
    document.querySelector('input').value =''
}
function limparLista(){
    listaAmigos.innerText = ''
}
function sortearAmigo() {
    if(amigos.length == 0){
        alert('A lista está vazia... gentileza adicionar os nomes !')
        return 
    } else {
        let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)]
        let resultado  = document.querySelector('#resultado')
        resultado.innerHTML = amigoSecreto
    }
}