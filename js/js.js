var jogadas = 0; // Conta as jogadas para controlar a hora certa de exibir o resultado
Cartas = new Array(21); // Cria um array vazio para popular através da API

$.ajax("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
	.done(function(data) {
    	deck_id = data.deck_id; // Pega o ID do baralho (embaralhado, pois "shuffled": true no JSON) vindo da API
	$.ajax("https://deckofcardsapi.com/api/deck/"+deck_id+"/draw/?count=21") // Utiliza o ID para buscar o baralho (conforme previsto na documentação da API, ou count=21 traz 21 cartas randômicas)
     	.done(function(data2) {
         	resultado = data2.cards; // Grava o JSON na variável 
		for(j=0 ; j<resultado.length; j++){ // Looping enquanto j for menor que a quantidade de cartas
				Cartas[j] = resultado[j].images.png; // Popula o Array previamente criado com o SRC de cada imagem
        		document.querySelector("#carta"+(j+1)+"").src = Cartas[j]; // Pega os campos IMG no arquivo HTML através do ID e insere as URLs provindas da API no SRC
			}
     	});
	});

function gravarLinhas(){

	// Pega as cartas e grava em 3 linhas separadas, pra embaralharar da maneira correta (segredo da mágica) posteriormente

	Linha1 = new Array(Cartas[0], Cartas[3], Cartas[6], Cartas[9], Cartas[12], Cartas[15], Cartas[18]);
	Linha2 = new Array(Cartas[1], Cartas[4], Cartas[7], Cartas[10], Cartas[13], Cartas[16], Cartas[19]);
	Linha3 = new Array(Cartas[2], Cartas[5], Cartas[8], Cartas[11], Cartas[14], Cartas[17], Cartas[20]);

	document.querySelector("#contagem").innerHTML = "Jogada <b>" + (jogadas+1) + "</b> de <b>3</b>"; // Incrementa o campo de contagem de jogadas
}

/*

No truque, a pessoa escolhe uma carta (em segredo) e aponta para o mágico em qual coluna a carta se encontra
O mágico pega a coluna indicada e coloca no meio das duas outras colunas
Posteriormente ele dá as cartas preenchendo um espaço de cada coluna por vez, até chegar no fim
As funções abaixo tem por objetivo pegar a coluna indicada e colocá-las entre as duas colunas


*/

function embaralhar1(){
	
	gravarLinhas(); // Executa a função da linha 17

	// Se o usuário clicar na primeira coluna, essa função será ativada. 

	Cartas[0] = Linha3[0];
	Cartas[1] = Linha3[1];
	Cartas[2] = Linha3[2];
	Cartas[3] = Linha3[3];
	Cartas[4] = Linha3[4];
	Cartas[5] = Linha3[5];
	Cartas[6] = Linha3[6];

	// Abaixo colocamos a primeira coluna coletada na função gravarLinhas no 'meio do baralho'
	// Obs: a primeira e a última coluna podem ser populadas tanto com a Linha3 quanto com a Linha2, não faz diferença

	Cartas[7] = Linha1[0];
	Cartas[8] = Linha1[1];
	Cartas[9] = Linha1[2]; 
	Cartas[10] = Linha1[3];
	Cartas[11] = Linha1[4];
	Cartas[12] = Linha1[5];
	Cartas[13] = Linha1[6];
	
	Cartas[14] = Linha2[0];
	Cartas[15] = Linha2[1];
	Cartas[16] = Linha2[2];
	Cartas[17] = Linha2[3];
	Cartas[18] = Linha2[4];
	Cartas[19] = Linha2[5];
	Cartas[20] = Linha2[6];
	
	for(j=0	; j<21; j++){
		document.querySelector("#carta"+(j+1)+"").src = Cartas[j]; // Pega os campos IMG no arquivo HTML e insere o endereço da imagem no SRC (embaralhado corretamente)
	}

	jogadas++; // Incrementa +1 na variável jogadas
	
	if(jogadas == 3){ // Se for a terceira jogada, ativa a função ExibirCartaFinal
		ExibirCartaFinal();
	}
}

function embaralhar2(){

	// Se o usuário clicar na segunda coluna, essa função será ativada. 	
	
	gravarLinhas(); // Executa a função da linha 17

	Cartas[0] = Linha1[0];
	Cartas[1] = Linha1[1];
	Cartas[2] = Linha1[2];
	Cartas[3] = Linha1[3];
	Cartas[4] = Linha1[4];
	Cartas[5] = Linha1[5];
	Cartas[6] = Linha1[6];

	// Abaixo colocamos a segunda coluna coletada na função gravarLinhas no 'meio do baralho'
	// Obs: a primeira e a última coluna podem ser populadas tanto com a Linha1 quanto com a Linha3, não faz diferença	

	Cartas[7] = Linha2[0];
	Cartas[8] = Linha2[1];
	Cartas[9] = Linha2[2];
	Cartas[10] = Linha2[3];
	Cartas[11] = Linha2[4];
	Cartas[12] = Linha2[5];
	Cartas[13] = Linha2[6];
	
	Cartas[14] = Linha3[0];
	Cartas[15] = Linha3[1];
	Cartas[16] = Linha3[2];
	Cartas[17] = Linha3[3];
	Cartas[18] = Linha3[4];
	Cartas[19] = Linha3[5];
	Cartas[20] = Linha3[6];
	
	for(j=0	; j<21; j++){
		document.querySelector("#carta"+(j+1)+"").src = Cartas[j]; // Pega os campos IMG no arquivo HTML e insere o endereço da imagem no SRC (embaralhado corretamente)
	}

	jogadas++; // Incrementa +1 na variável jogadas
	
	if(jogadas == 3){  // Se for a terceira jogada, ativa a função ExibirCartaFinal
		ExibirCartaFinal();
	}
}

function embaralhar3(){

	// Se o usuário clicar na terceira coluna, essa função será ativada. 	
	
	gravarLinhas(); // Executa a função da linha 17

	Cartas[0] = Linha1[0];
	Cartas[1] = Linha1[1];
	Cartas[2] = Linha1[2];
	Cartas[3] = Linha1[3];
	Cartas[4] = Linha1[4];
	Cartas[5] = Linha1[5];
	Cartas[6] = Linha1[6];

	// Abaixo colocamos a terceira coluna coletada na função gravarLinhas no 'meio do baralho'
	// Obs: a primeira e a última coluna podem ser populadas tanto com a Linha1 quanto com a Linha2, não faz diferença		

	Cartas[7] = Linha3[0];
	Cartas[8] = Linha3[1];
	Cartas[9] = Linha3[2];
	Cartas[10] = Linha3[3];
	Cartas[11] = Linha3[4];
	Cartas[12] = Linha3[5];
	Cartas[13] = Linha3[6];
	
	Cartas[14] = Linha2[0];
	Cartas[15] = Linha2[1];
	Cartas[16] = Linha2[2];
	Cartas[17] = Linha2[3];
	Cartas[18] = Linha2[4];
	Cartas[19] = Linha2[5];
	Cartas[20] = Linha2[6];
	
	for(j=0	; j<21; j++){
		document.querySelector("#carta"+(j+1)+"").src = Cartas[j]; // Pega os campos IMG no arquivo HTML e insere o endereço da imagem no SRC (embaralhado corretamente)
	}

	jogadas++; // Incrementa +1 na variável jogadas
	
	if(jogadas == 3){ // Se for a terceira jogada, ativa a função ExibirCartaFinal
		ExibirCartaFinal();
	}
}

function ExibirCartaFinal(){ // Exibe o resultado para o usuário e esconde/mostra alguns elementos
	document.querySelector("#resultado").src = Cartas[10]; // Através do algorítimo, após as 3 rodadas, a carta escolhida pelo usuário será a 11ª (o 10º índice do array)
	for(j=1	; j<22; j++){
		document.querySelector("#carta"+j+"").src = "image/card-background.png"; // Esconde todas as cartas setando uma imagem com o fundo da carta no src (não consegui o fundo do baralho na API)
	}
	document.querySelector("#modal").click(); // Simula um click no elemento que abre o modal que contém a carta final
	document.querySelector("#reload").innerHTML = "Dar as cartas novamente"; // Insere texto para jogar novamente no campo com id Reload (de dentro do modal)
	document.querySelector("#jogarnovamente").style.display = "block"; // Caso o usuário feche o modal sem clicar no campo da linha acima, haverá um campo com a opção de 'Jogar Novamente'
	document.querySelector("#contagem").style.display = "none"; // Esconde o campo que estava mostrando a contagem das jogadas para o usuário
	document.querySelector(".btn1").style.display = "none"; // Esconde o botão que clica para escolher colunas, evitando que o usuário 'continue jogando', sendo que a mágica foi finalizada e o baralho não foi reembaralhado
	document.querySelector(".btn2").style.display = "none"; // Similar à de cima
	document.querySelector(".btn3").style.display = "none"; // Similar à de cima
	document.querySelector("#embaralhar").style.display = "none"; // Esconde o campo 'Embaralhar' disponível durante a partida

	jogadas = 0; // Zera a variável jogadas para que o jogo possa começar novamente
}

// A função abaixo apenas tem o objetivo de alterar o sentido da seta nos botões das colunas, tendo em vista que em uma abaixo de 992px, as linhas se tornam colunas

function myFunction(resolucaoTela) {
  if (resolucaoTela.matches) {
    document.querySelector('#seta1').innerHTML = "\\/";
    document.querySelector('#seta2').innerHTML = "\\/";
    document.querySelector('#seta3').innerHTML = "\\/";        
  } else {
  	  	console.log(document.querySelector('#seta'));
    document.querySelector('#seta1').innerHTML = ">";
    document.querySelector('#seta2').innerHTML = ">";
    document.querySelector('#seta3').innerHTML = ">";
  }
}

var resolucaoTela = window.matchMedia("(max-width: 992px)");
myFunction(resolucaoTela)
resolucaoTela.addListener(myFunction)