function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var saud = window.document.getElementById('saudacao')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 6 && hora < 12) {
        // Bom dia
        img.src = `Imagens/manha.jpg`
        document.body.style.background = '#65E4F5'
        saud.innerText = 'BOM DIA!'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde.
        img.src = `Imagens/tarde.jpg`
        document.body.style.background = '#E67A00'
        saud.innerText = 'BOA TARDE!'
    } else if (hora >= 18 && hora <= 22) {
        // Boa Noite.
        img.src = `Imagens/noite1.jpeg`
        saud.innerText = 'BOA NOITE!'
        document.body.style.background = 'rgb(92, 88, 88)'
    } else {
        // Boa Madrugada.
        img.src = `Imagens/madrugada.jpeg`
        saud.innerText = 'BOA MADRUGADA!'
        document.body.style.background = 'black'
    }
}