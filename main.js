//Ao digitar, fazer o calculo

function calcular() {
    const soma = document.querySelector('#result');
    const valor1 = parseFloat(document.getElementById('txt1').value, 10);
    const valor2 = parseFloat(document.getElementById('txt2').value, 10);
    soma.value = valor1 + valor2;


}



// var carteira = [];



// function addnewiten(event) {
//     carteira.push(event.value);
// }

// var armazenaposicao = [];
// var inputValue = valorInout.val();
// var total = 0.00;

// $.each(carteira, () => i, element) {
//     armazenaposicao.push(inputValue);
//     Total = +element;
// };
//Ao clicar no botão cria um novo input
// var input = 1;
// function mais(campo) {

// var valor = "input "+input+" - "+campo+" <input type='text' name='"+campo+"' value=''><br>";
// var nova = document.getElementById("aqui");
// var novadiv = document.createElement("div");
// var nomediv = "div";
// novadiv.innerHTML = ""+input+" <input type='text' name='"+campo+"' value=''>";
// nova.appendChild(novadiv);

// input++;
// }
//Aceitar float