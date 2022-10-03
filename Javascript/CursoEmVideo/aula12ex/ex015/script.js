function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade < 14) {
                // Criança
                img.setAttribute('src', 'bebe_m.jpg')
            } else if (idade < 18) {
                // Jovem
                img.setAttribute('src', 'jovem_m.jpg')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'adulto_m.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso_m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}