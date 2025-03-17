let players = ["Aspas", "Jawgemo", "Demon1"];
let vitorias = [150, 110, 100];
let derrotas = [29, 30, 35];

for (let i = 0; i < players.length; i++) {
    let resultado = calcularNivel(players[i], vitorias[i], derrotas[i]);
    console.log("O Herói " + resultado.player + " tem um saldo de " + resultado.saldoVitorias + " e está no nível " + resultado.nivel);
}

function calcularNivel(player, vitoria, derrota) {
    let saldoVitorias = vitoria - derrota;
    let nivel;

    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return {
        player: player,
        saldoVitorias: saldoVitorias,
        nivel: nivel
    };
}