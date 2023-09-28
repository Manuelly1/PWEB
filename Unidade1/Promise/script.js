import { createTable } from './tableUtils.js';

const tabelaContainer = document.getElementById("tabelaContainer");
const botao = document.getElementById("botaoCarregar");

function fetchAndDisplayUsuarios() {
    tabelaContainer.innerHTML = "Fazendo requisição...";

    fetch("https://random-data-api.com/api/v2/users?size=5")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erro na requisição");
            }
            return response.json();
        })
        .then((usuarios) => {
            const columns = ["first_name", "last_name", "username", "email", "date_of_birth"];
            const table = createTable(usuarios, columns);
            tabelaContainer.innerHTML = '';
            tabelaContainer.appendChild(table);
        })
        .catch((error) => {
            tabelaContainer.innerHTML = "<p>Opssss! Ocorreu um pequeno erro!</p>";
        });
}

botao.addEventListener("click", fetchAndDisplayUsuarios);
