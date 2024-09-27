function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "images/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "images/close_white_36dp.svg";
    }
}

window.onload = function() {
    const dataExata = new Date();
    const diaSemana = dataExata.getDay();
    
    let nomeDia;
    
    switch (diaSemana) {
        case 0:
            nomeDia = "Nesse Domingo";
            break;
        case 1:
            nomeDia = "Nessa Segunda-feira";
            break;
        case 2:
            nomeDia = "Nessa Terça-feira";
            break;    
        case 3:
            nomeDia = "Nessa Quarta-feira";
            break;       
        case 4:
            nomeDia = "Nessa Quinta-feira";
            break;
        case 5:
            nomeDia = "Nessa Sexta-feira";
            break;
        case 6:
            nomeDia = "Nesse Sábado";
            break;
        default:
            nomeDia = "[Erro] Não foi possível ler o dia da semana do seu servidor.";
            break;
    }

    // Cria um objeto Date para obter a data e hora atuais
    const dataExata2 = new Date();
    const saudacaoData = dataExata2.getHours();
    let saudacaoNome;

    // Define a saudação com base na hora do dia
    if (saudacaoData >= 6 && saudacaoData <= 12) {
        saudacaoNome = "Bom dia!";
    } else if (saudacaoData >= 13 && saudacaoData <= 18) {
        saudacaoNome = "Boa tarde!";
    } else if (saudacaoData < 6) {
        saudacaoNome = "Boa madrugada!";
    } else {
        saudacaoNome = "Boa noite!";
    }

    // Seleciona o elemento <p> e atualiza o seu conteúdo
    let paragrafo = document.getElementsByClassName('apresentacao')[0];
    paragrafo.innerHTML = saudacaoNome + ' ' + nomeDia + ' gostaria de me apresentar, sou estudante de Análise e Desenvolvimento de Sistemas. Durante minha jornada acadêmica, tenho explorado algumas tecnologias para me especializar. Com um forte foco em <span class="colorido">desenvolvimento web</span>, busco desafios que me permitam aplicar meu conhecimento em <span class="colorido">soluções</span> práticas e eficientes.' ;

}

