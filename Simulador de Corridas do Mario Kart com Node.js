// Simulador de Corridas inspirado em Mario Kart usando Node.js

const jogadores = {
    Mario: { velocidade: 4, manobrabilidade: 3, poder: 3 },
    Peach: { velocidade: 3, manobrabilidade: 4, poder: 2 },
    Yoshi: { velocidade: 2, manobrabilidade: 4, poder: 3 },
    Bowser: { velocidade: 5, manobrabilidade: 2, poder: 5 },
    Luigi: { velocidade: 3, manobrabilidade: 4, poder: 4 },
    DonkeyKong: { velocidade: 2, manobrabilidade: 2, poder: 5 }
};

const rodadas = 5;
const ladosDado = 6;

function jogarDado() {
    return Math.floor(Math.random() * ladosDado) + 1;
}

function simularCorrida(jogador1, jogador2) {
    let pontosJogador1 = 0;
    let pontosJogador2 = 0;

    for (let i = 0; i < rodadas; i++) {
        const blocoPista = ['RETA', 'CURVA', 'CONFRONTO'][Math.floor(Math.random() * 3)];
        let dadoJogador1, dadoJogador2;

        if (blocoPista === 'RETA') {
            dadoJogador1 = jogarDado();
            dadoJogador2 = jogarDado();
            pontosJogador1 += dadoJogador1 > dadoJogador2 ? jogadores[jogador1].velocidade : 0;
            pontosJogador2 += dadoJogador2 > dadoJogador1 ? jogadores[jogador2].velocidade : 0;
        } else if (blocoPista === 'CURVA') {
            dadoJogador1 = jogarDado();
            dadoJogador2 = jogarDado();
            pontosJogador1 += dadoJogador1 > dadoJogador2 ? jogadores[jogador1].manobrabilidade : 0;
            pontosJogador2 += dadoJogador2 > dadoJogador1 ? jogadores[jogador2].manobrabilidade : 0;
        } else if (blocoPista === 'CONFRONTO') {
            dadoJogador1 = jogarDado();
            dadoJogador2 = jogarDado();
            pontosJogador1 += dadoJogador1 > dadoJogador2 ? 0 : jogadores[jogador1].poder;
            pontosJogador2 += dadoJogador2 > dadoJogador1 ? 0 : jogadores[jogador2].poder;
        }
    }

    return { [jogador1]: pontosJogador1, [jogador2]: pontosJogador2 };
}

// Simulação da corrida entre Mario e Luigi
const resultadoCorrida = simularCorrida('Mario', 'Luigi');
console.log('Resultado da Corrida:', resultadoCorrida);
