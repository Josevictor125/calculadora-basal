// --- Botão Apagar ---
    document.getElementById("apagarBtn").addEventListener("click", function () {
    document.getElementById("idade").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";

    const sexo = document.querySelectorAll('input[name="sexo"]');
    sexo.forEach(el => el.checked = false);

    document.getElementById("atividade").value = ""; // Limpa o select
    document.getElementById("resultado").textContent = "";
});

// --- Botão Calcular ---
document.getElementById("calcularBtn").addEventListener("click", function (event) {
    event.preventDefault();

    const idade = parseInt(document.getElementById("idade").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseInt(document.getElementById("peso").value);
    const sexo = document.querySelector('input[name="sexo"]:checked');
    const atividade = parseFloat(document.getElementById("atividade").value);

    if (
        isNaN(idade) || idade <= 0 ||
        isNaN(altura) || altura <= 0 ||
        isNaN(peso) || peso <= 0 ||
        !sexo ||
        isNaN(atividade)
    ) {
        document.getElementById("resultado").textContent = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    let tmb;
    if (sexo.value === "MASCULINO") {
        tmb = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
    } else {
        tmb = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
    }

    // Multiplica pelo fator de atividade física
    const tdee = tmb * atividade;

    // Mostra o resultado com alert
    let resultado = alert(`Sua TMB é: ${tmb.toFixed(2)} calorias/dia\nSua necessidade calórica diária é: ${tdee.toFixed(2)} calorias/dia`);
});
