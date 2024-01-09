document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button');
    const div = document.querySelector('#pw');
    const form = document.querySelector('form');
    let eye = document.querySelector('#olho');
    let senha = document.querySelector('#senha');
    let signIn = document.querySelector('#login')
    eye.addEventListener('click', function () {
        senha.type = (senha.type === 'password') ? 'text' : 'password';
        eye.src = (senha.type === 'password') ? 'eye-off.png' : 'eye.png';
    })
    button.addEventListener('click', function () {
        if (div.querySelector('#erro')) {
            div.querySelector('#erro').remove()
        }
        let email = document.querySelector('#login').value;
        let senha = document.querySelector('#senha').value;
        email.Pattern = '.*';
        if (!(email.includes('@') && email.includes('.com') && senha !== '')) {
            let paragrafo = document.createElement('p');
            paragrafo.id = 'erro';
            paragrafo.innerText = 'Digite um e-mail válido';
            paragrafo.style.color = '#ED3A5A';
            paragrafo.style.marginTop = '1%'
            paragrafo.style.marginBottom = '-2%'
            paragrafo.style.fontSize = '0.975vw';
            signIn.style.borderColor = '#ED3A5A';
            if (window.innerWidth <= 912) {
                paragrafo.style.fontSize = '1.675vw'
            }
            div.appendChild(paragrafo);
        } else {
            alert('Parabéns! Você fez login com sucesso')
            signIn.style.borderColor = '#E2E8F0'
        }
        form.addEventListener('submit', function (e) {
            e.preventDefault();
        })
    });
});