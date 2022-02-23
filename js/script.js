function cpfValido(cpf = 0) {
    cpf = cpf.replace(/\.|-/g,"")

    //Verifica se é uma sequência de dígitos repetidos

    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) {
        return false
    }

    //Validação primeiro dígito

    let soma = 0
    let x = 11
    for(let i = 0; i <= 8 && x >= 2; i++) {
        x--
        soma += cpf[i] * x
    }
    soma = (soma * 10) % 11

    if (soma == 10 || soma == 11) {
        soma = 0
    }

    if(soma != cpf[9]){
        return false
    }

    //Validação segundo dígito

    soma = 0
    let y = 12
    for(let i = 0; i <= 9 && y >= 2; i++) {
        y--
        soma += cpf[i] * y
    }
    soma = (soma * 10) % 11
    
    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    if(soma != cpf[10]){
        return false
    }

    return true
}

function validar(){
    var cpf = document.querySelector('#txtCPF').value;
    var resultado = document.querySelector('#res')
    var validacao = cpfValido(cpf);
    if (validacao == true) {
        resultado.innerHTML = " <p style='color: #008000; text-align: center;'>CPF Válido!</p>"
    } else {
        resultado.innerHTML = " <p style='color: #FF0000; text-align: center;'>CPF Inválido!</p>"
    }
}
