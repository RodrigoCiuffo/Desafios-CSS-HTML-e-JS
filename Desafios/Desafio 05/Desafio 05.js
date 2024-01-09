document.addEventListener('DOMContentLoaded', function () {
    const cardInput = document.getElementById('num');
    const dateInput = document.getElementById('date');
    const cvvInput = document.getElementById('cvv');
    const form = document.getElementById('form')
    const name = document.getElementById('name')
//Função de submit do formulário, que adequa as entradas a determinados formatos de exibição e valida os campos
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let check = document.getElementById('msg');
        if (check) {
            check.remove()
        }

        let cartao = cardInput.value.replace(/\s/g, '');
        let codigo = cvvInput.value;
        let validade = dateInput.value;
        let nome = name.value;
        if (!(cartao.length === 16) || codigo.length !== 3 || validade.length !== 5 || nome.length < 1) {
            let erro = document.createElement('p');
            erro.id = 'msg'
            erro.innerText = 'Insira um número de cartão válido';
            erro.style.fontSize = '12px'
            erro.style.color = '#FB7185'
            erro.style.padding = '0'
            erro.style.margin = '0'
            cardInput.style.border = '1px solid #FB7185'
            cardInput.insertAdjacentElement('afterend', erro);
        } else {
            alert('Cartão registrado com sucesso!');
            cardInput.style.border = '1px solid #9CA3AF';
        }
    });
//Mais adequação dos inputs
    cardInput.addEventListener('input', function () {
        let valorInput = cardInput.value.replace(/\D/g, '');
        if (valorInput.length > 16) {
            valorInput = valorInput.slice(0, 16);
        }

        valorInput = valorInput.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4'); 
        cardInput.value = valorInput;
    });
//Formatação para entrada de data
    dateInput.addEventListener('input', function () {
        let valorData = dateInput.value.replace(/\D/g, '');

        valorData = valorData.replace(/(\d{2})(\d{0,2})/, function (_, p1, p2) {
            if (p2) {

                const month = Math.max(1, Math.min(12, parseInt(p1, 10)));

                const year = p2.slice(0, 2);

                return `${month}/${year}`;
            } else {
                return p1;
            }
        });

        dateInput.value = valorData;
    });
//Formatação para um máximo de 3 caracteres (numéricos)
    cvvInput.addEventListener('input', function () {
        let valorCvv = cvvInput.value.replace(/\D/g, '');
        if (valorCvv.length > 3) {
            valorCvv = valorCvv.slice(0, 3);
        }

        cvvInput.value = valorCvv;
    });
})