function mascara_numero(){
    let numero = document.getElementById('telefone');
    if(numero.value.length == 0 ){
        numero.value += "(";
    } else if(numero.value.length == 3){
        numero.value += ")";
    } else if(numero.value.length == 9){
        numero.value += "-"
    }
}



function alerta(event){
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let mensagem = document.getElementById('mensagem').value;

    if(nome == '' || sobrenome == '' || email == '' || telefone == '' || mensagem == ''){
        event.preventDefault();
        alert("Por favor, preencha todas as informações");
    }else{
        alert("Agradecemos a sua mensagem! Em breve entraremos em contato")
    }
}


document.getElementById('tipsForm').addEventListener('submit', alerta);