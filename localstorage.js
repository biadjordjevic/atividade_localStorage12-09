
function Enviar(){
    let button = document.getElementById('number').value
    localStorage.setItem('Número', button)
  console.log('número armazenado!')
}