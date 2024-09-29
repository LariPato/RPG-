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
    
    switch(numeroDaCasa){
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
          case "4":
            alert("Você pega uma margarida no campo, oferece para ela e diz que ainda não sabe onde irão viver, mas que serão o lar um do outro. Os olhos dela brilham com isso.")
            alert("Vocês vão viver em uma casinha branca em uma colina linda e vivem muito felizes.")
          break
          
          default: 
            alert(`Isso não é opção seu engraçadinho. Tá querendo ir morar debaixo da ponte?`)
            const morarNaPonte = prompt(`1 - Sim / 2 - Não`)
          
            switch(morarNaPonte){
                case "1":
                    alert("Você disse para Margarida que iriam morar debaixo da ponte, ela disse que merecia coisa melhor e te abandonou. Você foi morar  sozinho embaixo da ponte.")
                    break
                    case "2":
                        casa()
                        break
                        default: 
                        alert("Fica clicando nos negócio errado, também não vai mais jogar!")
            }
           
            


    }
         

  }



    // lutando contra um peixe
    function batalhaPeixe(){
        
        let vidaDoPato = 10
        let vidaPeixe = 10

        alert(`Sua vida é ${vidaDoPato} e a vida do Peixe Peixoso é ${vidaPeixe}`)

        while (vidaDoPato >=0 && vidaPeixe >=0){
            alert(`Sua vida é ${vidaDoPato} e a vida do Peixoso é ${vidaPeixe}. Role os dados!`)
            let numeroSorteadoPato = rolarDado()
            alert(`Você tirou ${numeroSorteadoPato}! Agora é a vez do Peixoso!`)
            let numeroSorteadoPeixe = rolarDado()
            if(numeroSorteadoPato> numeroSorteadoPeixe){
                vidaPeixe -= 2
                alert(`O Peixoso tirou ${numeroSorteadoPeixe}. Você deu um tapa nele com sua asa! Agora é vida dele é ${vidaPeixe}`)
            }
            else if(numeroSorteadoPato < numeroSorteadoPeixe){
                vidaDoPato -= 2
                alert(`O Peixoso tirou ${numeroSorteadoPeixe} e bateu a cauda no seu rosto! Agora sua vida é ${vidaDoPato}`)
            }
            else{
                alert("Você tentou morder ele e ele desviou, emapte!")
            }
        }
        if(vidaDoPato<= 0){
            alert("O Peixe Peixoso te bateu tantas vezes que você teve que fugir.")
        }
        else{
            alert("Você venceu o peixoso depois de arrancar as escamas das costas dele com o bico e conseguiu um diamante!")
            alert("Em um campo dourado sob a luz suave de uma tarde de verão, o pato apaixonado ajoelhou-se entre flores silvestres e pediu Margarida em casamento, seu coração pulsando como o vento nas folhas. Com um brilho nos olhos, ele vendeu o diamante que encontrou, transformando sonhos em realidade. Com os recursos adquiridos, comprou o magnífico Palácio de Versalhes, onde as paredes ecoavam risos e o amor dançava em cada canto. Juntos, viveram felizes, cercados pela beleza do lugar, cultivando um amor tão eterno quanto os jardins que os abraçavam.")
        }
}

//************************************* Função que roda ao iniciar o jogo *************************************

function iniciar(){
    const personagem = prompt(`Seja bem-vindo a "Odisséias de um Pato"!!!! Escolha uma das opções: 
        1 - Sortear Personagem
        2 - Sair do Jogo`)

    switch(personagem){
        case "1":
            personagemPrincipal = sortearPersonagem()
            alert(`O personagem sorteado foi ${personagemPrincipal}`)
            romanceDoPato()
        break
            case "2":
        alert(`Fiquei 3 horas fazendo esse código e você não quer jogar.....
Os  de vdd eu sei quem são 👍`)
        break
        default:
            alert(`Então não vai ter nome`)
            romanceDoPato()
    }
}


//************************************* Função para sortear personagem ***********************************, **
function sortearPersonagem() {
const personagens = ["Pato Cleiton", "Pato Arnaldo", "Pato Marcelo", "Pato Nestor", "Pato Astolfo","Pato Fubá Mimoso", "Pato Patonildo", "Pato Raimundo"];

const sorteado = Math.floor(Math.random() * personagens.length);
return personagens[sorteado];
}




// Função que inicia a história do Pato 
function romanceDoPato(){
    alert(`    Enquanto eu, ${personagemPrincipal}, caminho pelo vasto campo verdejante sob a luz suave da primavera, sinto a brisa fresca acariciar minhas penas e o cheiro doce das flores silvestres perfumar o ar. As margaridas dançam ao meu redor, e eu mal consigo conter a emoção no meu peito; hoje é o dia em que pedirei minha amada Margarida em casamento. O céu azul se estende acima de mim, repleto de nuvens brancas que parecem sussurrar promessas de felicidade. Cada passo que dou é repleto de esperança, enquanto imagino o sorriso dela ao ouvir as palavras que estou prestes a pronunciar.`)
    const opcao1 = prompt(`O anel de ouro e rubi que você leva na ponta da asa escorrega e sai rolando até cair num lago. Você imediatamente pula na água. Depois de 10 minutos procurando o anel você ainda não o encontrou. O que fazer agora?"
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
                       alert(`Margarida pergunta: "Você??"
                       Você coloca o anel de rubi na cabeça dela, como se fosse um diadema (afinal patos não possuem mãos) e ela fica magnífica.`) 
                       casa()
                    }
                    else if(pedido == "2"){
                       alert(`Estive esperando por esse momento, é claro que sim!
                       Você coloca o anel de rubi na cabeça dela, como se fosse um diadema (afinal patos não possuem mãos) e ela fica magnífica.`)
                       casa()
                    }
                    else{
                       alert("A conversa acaba e você volta para casa")
                       return
                    }

            }
            else {
                const diamanteOuFuga = prompt(`Você conseguiu recuperar o anel e viu algo reluzindo no fundo do lago, como um raio de Sol aprisionado. Evidentemente era um tesouro, porém um peixe gigantesco estava guardando o báu, o que você vai fazer?
                    1- Lutar
                    2 - Voltar para casa`)
                    
                   switch(diamanteOuFuga){
                    case "1":
                        batalhaPeixe()
                        break
                    case "2":
                        alert("Você voltou para casa")
                        break
                        default: 
                        alert("Você voltou para casa")


                   }
             }

         }
       
    }
    
    else {
        alert(`Você voltou para casa.`)
        return

    }
}

