function validarCPF() {
    let cpf = document.getElementById("cpf").value
    cpf = cpf.replace(/[^\d]+/g,'')
//

    if (cpf === "") {
      console.log("Digite um valor!");
      return false;
    }
  
    if (cpf.length !== 11) {
      console.log("CPF inválido!");
      return false;
    }
    
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }

    //
    let soma = 0
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i)        
    }
    let resto = 11 - (soma % 11)
    //
      if (resto == 10 || resto == 11) resto = 0
    //
      if (resto != parseInt(cpf.charAt(9)))
      return false
    //
    soma = 0
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    //
      if (resto == 10 || resto == 11) resto = 0;
    //
      if (resto != parseInt(cpf.charAt(10))) return false;
      return true;
}

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();


const resultadoElement = document.getElementById('resultado')
  
if (validarCPF()) {
    document.getElementById('resultado').innerText = "CPF válido";
    resultadoElement.classList.add('valido')
    resultadoElement.classList.remove('invalido')
  } else {
    document.getElementById('resultado').innerText = "CPF inválido";
    resultadoElement.classList.add('invalido')
    resultadoElement.classList.remove('valido')
  }
});
