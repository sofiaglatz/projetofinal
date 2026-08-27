const formAlerta = document.getElementById("formAlerta");
const campoChuva = document.getElementById("chuva");
const campoVento = document.getElementById("vento");
const nivelAlerta = document.getElementById("nivelAlerta");
const justificativa = document.getElementById("justificativa");
const recomendacao = document.getElementById("recomendacao");

function calcularAlerta(chuva, vento) {
	if (chuva >= 100 || vento >= 100) {
		return {
			nivel: "Perigo",
			justificativa: "A chuva ou o vento atingiram níveis muito altos.",
			recomendacao: "Procure um local seguro e siga as orientações da Defesa Civil."
		};
	}

	if (chuva >= 70 || vento >= 70) {
		return {
			nivel: "Alerta",
			justificativa: "A chuva ou o vento apresentam risco elevado.",
			recomendacao: "Evite áreas abertas e acompanhe os avisos oficiais."
		};
	}

	if (chuva >= 40 || vento >= 50) {
		return {
			nivel: "Atenção",
			justificativa: "A chuva ou o vento exigem atenção às condições climáticas.",
			recomendacao: "Fique atento às mudanças do tempo e evite deslocamentos desnecessários."
		};
	}

	return {
		nivel: "Normal",
		justificativa: "As condições climáticas estão dentro dos limites normais.",
		recomendacao: "Continue acompanhando a previsão do tempo."
	};
}

formAlerta.addEventListener("submit", function (evento) {
	evento.preventDefault();

	const chuva = Number(campoChuva.value);
	const vento = Number(campoVento.value);

	if (!Number.isFinite(chuva) || !Number.isFinite(vento) || chuva < 0 || vento < 0) {
		nivelAlerta.textContent = "Inválido";
		justificativa.textContent = "Informe valores numéricos iguais ou maiores que zero.";
		recomendacao.textContent = "";
		return;
	}

	const resultado = calcularAlerta(chuva, vento);
	nivelAlerta.textContent = resultado.nivel;
	justificativa.textContent = resultado.justificativa;
	recomendacao.textContent = resultado.recomendacao;
});
