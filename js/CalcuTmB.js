// --- Botão Apagar ---
document.getElementById("apagarBtn").addEventListener("click", function () {
    // IDs para que correspondam ao HTML
    document.getElementById("idade").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = ""; // ID do peso é 'peso' no HTML

    const sexo = document.querySelectorAll('input[name="sexo"]');
    sexo.forEach(el => el.checked = false);

    document.getElementById("resultado").textContent = "";
});


// --- Botão Calcular ---
    document.getElementById("calcularBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Impede o envio do formulário e o recarregamento da página

    // Capturando os valores dos inputs com os IDs 
    const idade = parseInt(document.getElementById("idade").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value); // Use 'peso' para o campo de peso

    const sexo = document.querySelector('input[name="sexo"]:checked');

    // Verificação robusta para todos os campos
    if (isNaN(idade) || isNaN(altura) || isNaN(peso) || !sexo) {
        document.getElementById("resultado").textContent = "Por favor, preencha todos os campos com valores válidos.";
        return;
    }

    let tmb = 0;
    if (sexo.value === "MASCULINO") {
        tmb = 10 * peso + 6.25 * altura - 5 * idade + 5;
    } else { // O valor do input é "FEMININO"
        tmb = 10 * peso + 6.25 * altura - 5 * idade - 161;
    }

    // A variável que guarda o resultado do cálculo é `tmb`. 
    // Corrigindo para exibir o valor correto.
   
    let resultado = alert(`Sua TMB é: ${tmb.toFixed(2)} calorias/dia`);
});