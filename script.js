// Alertas Climáticos
// Gabriel Scottini, Guilherme Weege, Iohanna de Oliveira, Miguel Coelho, Sofia Glatz

const formAlerta = document.getElementById("formAlerta");
const campoChuva = document.getElementById("chuva");
const campoVento = document.getElementById("vento");
const nivelAlerta = document.getElementById("nivelAlerta");
const justificativa = document.getElementById("justificativa");
const recomendacao = document.getElementById("recomendacao");

function calcularAlerta(chuva, vento) {
	//se a quantidade de chuva for maior que 100 mm ou a velocidade do vento for maior que 90 km/h, o nível de alerta é "Perigo"
	if (chuva > 100 || vento > 90) {
		return {
			nivel: "Perigo",
			justificativa: "A chuva ou o vento atingiram níveis muito altos.",
			recomendacao: "Procure um local seguro e siga as orientações da Defesa Civil."
		};
	}
	//se a quantidade de chuva for maior ou igual a 61 mm ou a velocidade do vento for maior ou igual a 61 km/h, o nível de alerta é "Alerta"
	else if (chuva >= 61 || vento >= 61) {
		return {
			nivel: "Alerta",
			justificativa: "A chuva ou o vento apresentam risco elevado.",
			recomendacao: "Evite áreas abertas e acompanhe os avisos oficiais."
		};
	}
	//se a quantidade de chuva for maior ou igual a 30 mm ou a velocidade do vento for maior ou igual a 40 km/h, o nível de alerta é "Atenção"
	else if (chuva >= 30 || vento >= 40) {
		return {
			nivel: "Atenção",
			justificativa: "A chuva ou o vento exigem atenção às condições climáticas.",
			recomendacao: "Fique atento às mudanças do tempo e evite deslocamentos desnecessários."
		};
	}
	//se a quantidade de chuva for menor que 30 mm e a velocidade do vento for menor que 40 km/h, o nível de alerta é "Normal"
	return {
		nivel: "Normal",
		justificativa: "As condições climáticas estão dentro dos limites normais.",
		recomendacao: "Continue acompanhando a previsão do tempo."
	};
}

formAlerta.addEventListener("submit", function (evento) {
	evento.preventDefault();

	// Verifica se os dois campos foram preenchidos
if (campoChuva.value === "" || campoVento.value === "") {
    nivelAlerta.textContent = "Inválido";
    nivelAlerta.className = "nivel-invalido";
    justificativa.textContent = "Os dois valores devem ser preenchidos.";
    recomendacao.textContent = "";
    return;
}

const chuva = Number(campoChuva.value);
const vento = Number(campoVento.value);

// Impede valores negativos ou inválidos
if (!Number.isFinite(chuva) || !Number.isFinite(vento) || chuva < 0 || vento < 0) {
    nivelAlerta.textContent = "Inválido";
    nivelAlerta.className = "nivel-invalido";
    justificativa.textContent = "Informe valores numéricos iguais ou maiores que zero.";
    recomendacao.textContent = "";
    return;
}

	const resultado = calcularAlerta(chuva, vento);
	nivelAlerta.textContent = resultado.nivel;
	justificativa.textContent = resultado.justificativa;
	recomendacao.textContent = resultado.recomendacao;

nivelAlerta.className = "nivel-" + resultado.nivel.toLowerCase();
});