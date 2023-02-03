const tablePlayers = document.getElementById('player-table');

let players = [];
displayPlayerStatus();
// Cadastrar Jogador
function playerRegister() {
	const playerName = document.getElementById('player-name').value;
	const newPlayer = {};
	newPlayer.nome = playerName;
	newPlayer.vitoria = 0;
	newPlayer.empate = 0;
	newPlayer.derrota = 0;
	newPlayer.pontos = 0;

	players.push(newPlayer);

	displayPlayerStatus();
	clearPlayerField();
}
// Exibiir jogador na tela
function displayPlayerStatus() {
	tablePlayers.innerHTML = '';
	for (let i = 0; i < players.length; i++) {
		tablePlayers.innerHTML += `<tr>
        <td>${players[i].nome}</td>
        <td>${players[i].vitoria}</td>
        <td>${players[i].empate}</td>
        <td>${players[i].derrota}</td>
        <td>${players[i].pontos}</td>
        <td>
            <button
                onclick="addVictory(${i})"
                class="btn-actions btn-victory"
            >
                Vitória
            </button>
        </td>
        <td>
            <button
                onclick="addTie(${i})"
                class="btn-actions btn-tie"
            >
                Empate
            </button>
        </td>
        <td>
            <button
                onclick="addDefeat(${i})"
                class="btn-actions btn-defeat"
            >
                Derrota
            </button>
        </td>
        <td>
            <button
                onclick="clearPlayerData(${i})"
                class="btn-actions btn-delete"
            >
                Limpar Dados
            </button>
        </td>
        <td>
            <button onclick="deletePlayer()" class="btn-actions btn-delete">Apagar Jogador</button>
        </td>    
        </tr>`;
	}
}
// adicionar pontos de vitoria, empate e derrota
function addVictory(index) {
	players[index].vitoria++;
	players[index].pontos += 3;
	displayPlayerStatus();
}
function addTie(index) {
	players[index].empate++;
	players[index].pontos += 1;
	displayPlayerStatus();
}
function addDefeat(index) {
	players[index].derrota++;
	players[index].pontos -= 1;
	displayPlayerStatus();
}

// zerar pontos de vitoria, empate e derrota
function clearPlayerData(index) {
	players[index].vitoria = 0;
	players[index].empate = 0;
	players[index].derrota = 0;
	players[index].pontos = 0;
	displayPlayerStatus();
}

// deletar jogador selecionado
function deletePlayer(index) {
	players.splice(index, 1);
	displayPlayerStatus();
}

// deletar todos os jogadores
function deleteAllPlayers() {
	players = [];
	displayPlayerStatus();
}

// limpar input de usuario
function clearPlayerField() {
	document.getElementById('player-name').value = '';
}
