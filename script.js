//variável que irá guardar o personagem sorteado
let personagemPrincipal = ""
//variável que irá guardar o número sorteado no dado
let sorteioDado = 0

//************************************* Funções que serão repetidas ao longo do jogo *************************************

  // Função para rolar um dado (1 a 20)
  function rolarDado() {
    return Math.floor(Math.random() * 20) + 1;
  }

  // Onde Cleiton e Margarida vão morar?
  function casa(){
    const numeroDaCasa = prompt("Margarida quer saber onde vocês vão morar. Escolha um número de 1 a 5 e diga para ela.")
    
    switch(casa){
          case "1": 
            alert("Você diz para Margarida que vão morar  na França, na beira de um lago de águas cristalinas. Ela fica muito feliz com a ideia.")
            alert("Vocês vivem muito felizes no lago francês.")
          break
 
          case "2":
            alert("Você conta para Margarida que irão morar ali mesmo, naquele campo florido. Ela não fica muito feliz com isso, mas se acostuma com a ideia.")
            alert("Vocês vivem bem e felizes no campo.")
           break
          
          case"3":
            alert("Você informa para Margarida que seu plano é viajar pelo mundo e conhecer todos os países, ela fica maravilhada com a ideia!")
            alert("Vocês vivem muito felizes, trocando de país a cada ano.")
          break
          case"4":
            alert("Você pega uma margarida no campo, oferece para ela e diz que ainda não sabe onde irão viver, mas que serão o lar um do outro. Os olhos dela brilham com isso.")
            alert("Vocês vão viver em uma casinha branca em uma colina linda e vivem muito felizes.")
          break
          default: 
            alert(`Isso não é opção seu engraçadinho. Tá querendo ir morar debaixo da ponte?`)
            const morarNaPonte = prompt(`1 - Sim
                2 - Não`)
            


    }
         

  }



    // Função para batalha de nível médio
    function batalhaMedia(){
        
        let vidaPersonagem = 10
        let vidaInimigo = 10

        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}`)

        while (vidaPersonagem >=0 && vidaInimigo >=0){
            alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
            let numeroSorteadoPersonagem = rolarDado()
            alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`)
            let numeroSorteadoInimigo = rolarDado()
            if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
                vidaInimigo -= 2
                alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`)
            }
            else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
                vidaPersonagem -= 2
                alert(`O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
            }
            else{
                alert("Empate! Nada acontece.")
            }
        }
        if(vidaPersonagem <= 0){
            alert("Você perdeu! O jogo acabou.")
        }
        else{
            alert("Você venceu! Agora a história continua....")
        }
}

//************************************* Função que roda ao iniciar o jogo *************************************

function iniciar(){
    const personagem = prompt(`Seja bem-vindo a "Odisséias Completamente Aleatórias"!!!! Escolha uma das opções: 
        1 - Sortear Personagem
        2 - Sair do Jogo`)

    switch(personagem){
        case "1":
            personagemPrincipal = sortearPersonagem()
            alert(`O personagem sorteado foi ${personagemPrincipal}`)
            if(personagemPrincipal === "Pato Cleiton")
                romanceDoPato() //guerreiro
            else if(personagemPrincipal === "Fubá Mimoso")
                vendendoBolinho() //mago
            else if(personagemPrincipal === "Jéssica do Mercado") //arqueiro
            brigandoNoMercado()
            else(personagemPrincipal === "Claudinha do Forró")
            dancandoForro()
        break
        case "2":
        alert(`Fiquei 3 horas fazendo esse código e você não quer jogar.....
Os  de vdd eu sei quem são 👍`)
        break
        default:
            alert(`Você desbloqueou o caminho secreto...
Será que essa foi a melhor escolha? `)
    }
}


//************************************* Função para sortear personagem *************************************
function sortearPersonagem() {
const personagens = ["Pato Cleiton", "Fubá Mimoso", "Jéssica do Mercado", "Claudinha do Forró"];

const sorteado = Math.floor(Math.random() * personagens.length);
return personagens[sorteado];
}


//************************************* Funções para jornada de cada personagem *************************************

// Função que inicia a história do Pato Cleitooooooooooooooon
function romanceDoPato(){
    alert("    Enquanto caminho pelo vasto campo verdejante sob a luz suave da primavera, sinto a brisa fresca acariciar minhas penas e o cheiro doce das flores silvestres perfumar o ar. As margaridas dançam ao meu redor, e eu mal consigo conter a emoção no meu peito; hoje é o dia em que pedirei minha amada Margarida em casamento. O céu azul se estende acima de mim, repleto de nuvens brancas que parecem sussurrar promessas de felicidade. Cada passo que dou é repleto de esperança, enquanto imagino o sorriso dela ao ouvir as palavras que estou prestes a pronunciar.")
    const opcao1 = prompt(`O anel de ouro e rubi que você leva na ponta da asa escorrega e sai rolando até cair num lago. Você imdiatamente pula na água. Depois de 10 minutos procurando o anel você ainda não o encontrou. O que fazer agora?"
        1 - Continuo procurando o anel
        2 - Desisto e volto para casa`)
    if(opcao1 == "1"){
        const rolarDados = confirm("Os dados determinarão o sucesso ou fracasso da sua busca.")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 7) { 
                alert ( `Você ficou com caimbra na asa e não conseguiu encontrar o anel. Cansando e triste você volta para casa.`)
                return
            }
                    else if (sorteioDado >=8 && sorteioDado <=14 ){
                       alert ( `Você conseguiu recuperar o anel sem problemas.`)
                       alert("Enquanto caminho pela relva macia, o anel brilha na ponta da minha asa, refletindo a luz do sol. Ao longe, avisto Margarida, sua beleza radiante realçada pelo campo florido que a cerca. O vento suave acaricia meu rosto enquanto me aproximo, cada passo carregando a esperança de que este momento se torne eterno. Meu coração acelera, e o mundo ao nosso redor parece desaparecer, deixando apenas nós dois e a promessa de um amor inabalável.")
                       const pedido = prompt(`Você se aproxima e diz: Margarida, você está ainda mais deslumbrante do que eu me lembrava. Este lugar parece ter sido feito para você. Como você conseguiu se tornar a razão do meu sorriso?
                       Chegou a hora do pedido, o que você vai dizer? 
                       1 - ... Ma...Ma...Margarida...eu... 
                       2 -  Você quer se casar comigo?
                       3 - O dia está lindo, né?`)
                    if(pedido == "1"){
                       alert(`Margarida responde: Claro que sim, Cleiton!!!!! 
                       Você coloca o anel de rubi na cabeça dela, como se fosse um diadema (afinal patos não possuem mãos) e ela fica magnífica.`) //desenrolar historia
                    } 
                    else if(pedido == "2"){
                       alert(`Estive esperando por esse momento...Sim...
                       Você coloca o anel de rubi na cabeça dela, como se fosse um diadema (afinal patos não possuem mãos) e ela fica magnífica.`)
                    }
                    else{
                       alert("A conversa acaba e você volta para casa")
                       return
                    }

            }
            else {
                alert("Você conseguiu recuperar o anel e viu algo reluzindo no fundo do lago, como um raio de Sol aprisionado. Parabéns,você encontrou um diamante!")
             }
        }
      
    }
    
    else {
        alert(`Você voltou para casa.`)
        return

    }
}

// Função para iniciar a jornada do guerreiro
function iniciarJornadaGuerreiro(){
    const opcao1 = prompt(`Você está em em frente uma caverna escura. O que você faz?
        1 - Entro pra ver o que é
        2 - Vou pra outro lado`)
    if(opcao1 == "1"){
        const rolarDados = confirm("Agora vamos tentar sua sorte! Preparado para rolar os dados?")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 7) { 
                alert ( `${consequenciasCaverna[0]}`)
                batalhaMedia()
            }
            else if (sorteioDado >=8 && sorteioDado <=14 ){
                alert ( `${consequenciasCaverna[1]}`)
                batalhaFacil()
            }
            else {alert ( `${consequenciasCaverna[2]}`) }
        }
        else{
            alert(`Se ainda não está preparado, volte mais tarde.`)
            return
        }
    }
    else{
        alert(`Enviar para outras aventuras....`)
        return
    }
}

