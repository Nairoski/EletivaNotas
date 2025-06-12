document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("form");

    const materias = [
    "Portugues", "Matematica", "Geometria", "Fisica", "Quimica",
    "Biologia", "Historia", "Sociologia", "Artes", "Geografia"
    ];

    materias.forEach(materia => {
        if (!localStorage.getItem(materia)) {
            localStorage.setItem(materia, "");
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let materia = document.getElementById("materias").value;
        let escrita = parseFloat(document.getElementById("escrita").value) || 0;
        let pratica = parseFloat(document.getElementById("pratica").value) || 0;
        let participacao = parseFloat(document.getElementById("participacao").value) || 0;
        let simulado = parseFloat(document.getElementById("simulado").value) || 0;

        let notaFinal = (
            (escrita) +
            (pratica) +
            (participacao) +
            (simulado)
        );

        notaFinal = notaFinal.toFixed(1); // deixa com duas casas decimais

        localStorage.setItem(materia, notaFinal);
    });


});

function load() {
    const materias = [
        "Portugues", "Matematica", "Geometria", "Fisica", "Quimica",
        "Biologia", "Historia", "Sociologia", "Artes", "Geografia"
    ];

    let tabelaHTML = "<table border='1' style='border-collapse: collapse; width: 50%; text-align: center;'>";
    tabelaHTML += "<tr><th>Matéria</th><th>Nota</th></tr>";

    materias.forEach(materia => {
        let nota = localStorage.getItem(materia);
        if (nota !== null && nota !== "") {
            tabelaHTML += `<tr><td>${materia}</td><td>${nota}</td></tr>`;
        } else {
            tabelaHTML += `<tr><td>${materia}</td><td>—</td></tr>`;
        }
    });

    tabelaHTML += "</table>";

    document.getElementById("tabela").innerHTML = tabelaHTML;
}
