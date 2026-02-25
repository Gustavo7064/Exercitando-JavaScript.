function Mostrar() {

    var valor = document.getElementById("caixa1").value;

    // verificar se está vazio ou não é número
    if (valor == "" || isNaN(valor)) {
        alert("Digite um número válido");
        return;
    }

    valor = Number(valor); // transforma em número

    var resultado = "";

    for (var i = 1; i <= valor; i++) {

        // se for ímpar
        if (i % 2 == 1) {
            resultado = resultado + i + "<br>";
        }
    }

    document.getElementById("numeros").innerHTML = resultado;
}