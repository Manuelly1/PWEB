import {createTable} from './tableUtils.js';

const tabelaContainer = document.getElementById("tabelaContainer");
const botao = document.getElementById("botaoCarregar");

async function fetchAndDisplayUsuarios() {
    try {
        const response = await fetch("https://random-data-api.com/api/v2/users?size=3");
        const usuarios = await response.json();
        const columns = ["first_name", "last_name", "username", "email", "date_of_birth"];
        const table = createTable(usuarios, columns);

        tabelaContainer.innerHTML = '';
        tabelaContainer.appendChild(table);
    } catch (error) {
        tabelaContainer.innerHTML = "<p>Opssss! Ocorreu um pequeno erro!</p>";
    }
}

botao.addEventListener("click", fetchAndDisplayUsuarios);
