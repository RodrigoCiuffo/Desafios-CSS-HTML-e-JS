document.addEventListener('DOMContentLoaded', function () {
    let input = document.querySelector('#digitar')
    let enviar = document.querySelector('#form')
    let navi = document.querySelector('#chatContainer')
    let sec = document.querySelector('#sec4')
    let close = document.getElementById('x')
    let sendButton = document.getElementById('icon')
    enviar.addEventListener('submit', function (e) {
        e.preventDefault();
    })
//Função para tentativa de fechar o chat
    close.addEventListener('click', function () {
        alert('Impossível fechar o chat!')
    })
//Função para as mensagens do usuário (envio via botão)
    sendButton.addEventListener('click', function () {
        let conteudo = input.value;
        let newMsg = sec.cloneNode(true);
        newMsg.style.marginBottom = '30px'
        let timer = newMsg.querySelector('#fourthHour')
        let horario = hora();
        let copia = newMsg.querySelector('#message2');
        let counter = 0;
        let larguraInicial = 145;
        let timerPadding = parseInt(timer.style.paddingLeft) || 0;
        while (counter < conteudo.length) {
            timerPadding += 5
            larguraInicial += 5;
            counter += 1;
            timer.style.paddingLeft = timerPadding + 'px';
        }
        copia.style.width = `${larguraInicial}px`;
        copia.innerText = `${conteudo}`;
        copia.style.fontWeight = '400'
        timer.innerText = `Você - ${horario}`
        navi.appendChild(newMsg);
        input.value = '';
        botTalk()
    })
//Função para as mensagens do usuário
    enviar.addEventListener('submit', function () {
        let conteudo = input.value;
        let newMsg = sec.cloneNode(true);
        newMsg.style.marginBottom = '30px'
        let timer = newMsg.querySelector('#fourthHour')
        let horario = hora();
        let copia = newMsg.querySelector('#message2');
        let counter = 0;
        let larguraInicial = 145;
        let timerPadding = parseInt(timer.style.paddingLeft) || 0;
        while (counter < conteudo.length) {
            timerPadding += 5
            larguraInicial += 5;
            counter += 1;
            timer.style.paddingLeft = timerPadding + 'px';
        }
        copia.style.width = `${larguraInicial}px`;
        copia.innerText = `${conteudo}`;
        copia.style.fontWeight = '400'
        timer.innerText = `Você - ${horario}`
        navi.appendChild(newMsg);
        input.value = '';
        botTalk()
    })
//Função para as mensagens da Cecília
    function botTalk() {
        let ceci = document.querySelector('#sec1');
        let newBotMsg = ceci.cloneNode(true);
        let ceciMsg = newBotMsg.querySelector('#msg1');
        timing = newBotMsg.querySelector('#firstHour')
        timing.innerText = `Cecilia - ${hora()}`
        ceciMsg.innerText = 'Eu posso falar! 😄'
        ceciMsg.style.width = '182px'
        navi.appendChild(newBotMsg);
    }
//Função para definição da hora das mensagens
    function hora() {
        let relogio = new Date();
        let horas = relogio.getHours();
        let minutos = relogio.getMinutes();
        if (minutos < 10) {
            let horario = `${horas}:0${minutos}`;
            return horario;
        }
        let horario = `${horas}:${minutos}`;
        return horario;
    }
})