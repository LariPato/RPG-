//variável que irá guardar o personagem sorteado
let personagemPrincipal = ""
//variável que irá guardar o número sorteado no dado
let sorteioDado = 0

//************************************* Funções que serão repetidas ao longo do jogo *************************************

  // Função para rolar um dado (1 a 20)
  function rolarDado() {
    return Math.floor(Math.random() * 20) + 1;
  }

  // Função para batalha de nível fácil
  function batalhaFacil(){
    
    let vidaPersonagem = 10
    let vidaInimigo = 5

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
                batalhaMedia() //desenrolar historia
            }
            else if (sorteioDado >=8 && sorteioDado <=14 ){
                alert ( `Você conseguiu recuperar o anel sem problemas.`)
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

// Função para iniciar a jornada do mago
function iniciarJornadaMago(){
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