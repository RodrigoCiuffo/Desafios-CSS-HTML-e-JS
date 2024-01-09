document.addEventListener('DOMContentLoaded', function () {
    let many = document.querySelector('#many')
    let sub = document.querySelector('#minus')
    let add = document.querySelector('#plus')
    many.value = 1
    many.innerText = '0' + many.value

    sub.addEventListener('click', function () {
        if (many.value > 1) {
            many.value = many.value - 1
            if (many.value >= 1 && many.value < 10) {
                many.innerText = '0' + many.value
            } else {
                many.innerText = many.value
            }
        }
    })

    add.addEventListener('click', function () {
        if (many.value < 99) {
            many.value = many.value + 1
            if (many.value >= 1 && many.value < 10) {
                many.innerText = '0' + many.value
            } else {
                many.innerText = many.value
            }
        }
    })
})