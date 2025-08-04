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

let iconsTech = document.querySelector('.icones-tech');

let iconScss = document.querySelector('.icon-scss');
let iconCss = document.querySelector('.icon-css');
let iconTail = document.querySelector('.icon-tail');
let iconJs = document.querySelector('.icon-js');
let iconGit = document.querySelector('.icon-git');
let iconPhp = document.querySelector('.icon-php');
let iconReact = document.querySelector('.icon-react');
let paragrafoTech = document.querySelector('.paragrafo-tech');
let icons = document.querySelectorAll('.icons');


function conteudoScss(){
    paragrafoTech.innerHTML = `O SCSS adiciona recursos avançados como variáveis, mixins e aninhamento de seletores.
    Facilita a escrita e manutenção de estilos com uma sintaxe mais organizada e poderosa.`;
}

function conteudoCss(){
    paragrafoTech.innerHTML = `CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site.`;
}

function conteudoTail(){
    paragrafoTech.innerHTML = `Facilita o desenvolvimento com classes pré-definidas, eliminando a necessidade de escrever muito CSS manualmente. Proporciona agilidade e consistência no design, mantendo o código mais limpo e organizado`;
}

function conteudoJs(){
    paragrafoTech.innerHTML = `JavaScript é essencial para a web porque proporciona interatividade, permite manipulação dinâmica do DOM e facilita a comunicação assíncrona com servidores, melhorando a experiência do usuário.`;
}

function conteudoGit(){
    paragrafoTech.innerHTML = `O Git permite o controle de versão. Oferece um histórico detalhado, facilitando a reversão para versões anteriores,  permite que desenvolvam novas funcionalidades sem afetar o código principal.`;
}

function conteudoPhp(){
    paragrafoTech.innerHTML = `O PHP permite a criação de aplicações dinâmicas e interativas. Ele facilita a integração com bancos de dados, tornando o armazenamento e recuperação de dados mais eficientes.`;
}


function conteudoReact(){
    paragrafoTech.innerHTML = `O React é uma biblioteca JavaScript focada na criação de interfaces de usuário dinâmicas e reativas.
    Permite desenvolver aplicações web com componentes reutilizáveis e atualização eficiente de dados.`;
}

function limpeza(){
    paragrafoTech.innerHTML = `No meu trabalho como <span class="colorido">desenvolvedora front-end</span>, eu me concentro em criar experiências web utilizando uma ampla de tecnologias e ferramentas. Aqui estão algumas das minhas principais habilidades:`;
}


function init(){
    iconScss.addEventListener('mouseenter', conteudoScss);
    iconScss.addEventListener('click', conteudoScss);
    iconScss.addEventListener('mouseleave', limpeza);

    iconCss.addEventListener('mouseenter', conteudoCss);
    iconCss.addEventListener('click', conteudoCss);
    iconCss.addEventListener('mouseleave', limpeza);

    iconJs.addEventListener('mouseenter', conteudoJs);
    iconJs.addEventListener('click', conteudoJs);
    iconJs.addEventListener('mouseleave', limpeza);

    iconGit.addEventListener('mouseenter', conteudoGit);
    iconGit.addEventListener('click', conteudoGit);
    iconGit.addEventListener('mouseleave', limpeza);

    iconPhp.addEventListener('mouseenter', conteudoPhp);
    iconPhp.addEventListener('click', conteudoPhp);
    iconPhp.addEventListener('mouseleave', limpeza);

    iconReact.addEventListener('mouseenter', conteudoReact);
    iconReact.addEventListener('click', conteudoReact);
    iconReact.addEventListener('mouseleave', limpeza);

    iconTail.addEventListener('mouseenter', conteudoTail);
    iconTail.addEventListener('click', conteudoTail);
    iconTail.addEventListener('mouseleave', limpeza);

    // icons.addEventListener('mouseout', function(){

    // })
}
init()