function somar() {
// Inputs
var idade = document.getElementById("idade")
var peso = document.getElementById("peso").value
var altura = document.getElementById("altura").value

//Calculo
var imc;
imc = peso/(altura*altura)

resultadofinal = (`Seu IMC é de ${imc.toFixed(2)} kg/m2`)
    if(imc < 17) {
        resultadofinal1 = (`Está classificado como Muito abaixo do peso`)
    }
    else if(imc < 18.49){
        resultadofinal1 = (`Está classificado como Abaixo do peso`)
    }
    else if(imc < 24.99){
        resultadofinal1 = (`Está classificado como Peso normal`)
    }
    else if(imc < 29.99){
        resultadofinal1 = (`Está classificado como Acima do peso`)
    }
    else if(imc < 34.99){
        resultadofinal1 = (`Está classificado como Obesidade I`)
    }
    else if(imc < 39.99){
        resultadofinal1 = (`Está classificado como Obesidade II (Severa)`)
    }
    else if(imc > 40){
        resultadofinal1 = (`Está classificado como Obesidade III (Mórbida)`)
    }

// Saida de dados
document.getElementById("resultadox").innerText = resultadofinal
document.getElementById("resultadoxx").innerText = resultadofinal1
}
