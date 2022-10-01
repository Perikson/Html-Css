function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 6 && hora < 12) {
        // Bom dia
        img.src = `Imagens/manha.jpg`
        document.body.section.style.background = '#4BDFFA'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde.
        img.src = `Imagens/tarde.jpg`
        document.body.style.background = '#4BDFFA'
    } else if (hora >= 18 && hora <= 22) {
        // Boa Noite.
        img.src = `Imagens/noite1.jpeg`
    } else {
        // Boa Madrugada.
        img.src = `Imagens/madrugada.jpeg`
    }
}