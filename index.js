function verificar() {
    var ano = new Date()
    var anoAtual = ano.getUTCFullYear()
    var anoNasc_usuario = document.querySelector("input#ano_nasc")
    var resultado = document.querySelector("div#res")
    var res_genero = document.getElementsByName('res_sexo')
    var img = document.createElement('img')

    if (anoNasc_usuario.value.length == 0 || Number(anoNasc_usuario.value) > anoAtual) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var idade = anoAtual - Number(anoNasc_usuario.value)
        img.setAttribute('id', 'foto')

        if (res_genero[0].checked) {
            if (idade >= 0 && idade <= 2) {
                img.setAttribute('src', 'circle-bebe-man.png')
                resultado.innerHTML = `Detectamos um bebe de ${idade} anos.`
            } else if (idade <= 11) {
                img.setAttribute('src', 'crianca-man.png')
                resultado.innerHTML = `Detectamos uma criança menino  de ${idade} anos.`
            } else if (idade <= 17) {
                img.setAttribute('src', 'adolescente-man.png')
                resultado.innerHTML = `Detectamos um adolescente menino  de ${idade} anos.`
            } else if (idade <= 25) {
                img.setAttribute('src', 'circle-young-man.png')
                resultado.innerHTML = `Detectamos um jovem adulto de ${idade} anos.`
            } else if (idade <= 59) {
                img.setAttribute('src', 'circle-adulto-man.png')
                resultado.innerHTML = `Detectamos um homen adulto de ${idade} anos.`
            } else if (idade <= 100) {
                img.setAttribute('src', 'circle-idoso.png')
                resultado.innerHTML = `Detectamos um homen idoso de ${idade} anos.`
            }
        } else if (res_genero[1].checked) {
            if (idade >= 0 && idade <= 2) {
                img.setAttribute('src', 'circle-bebe-woman.png')
                resultado.innerHTML = `Detectamos uma bebe de ${idade} anos.`
            } else if (idade <= 11) {
                img.setAttribute('src', 'crianca-woman.png')
                resultado.innerHTML = `Detectamos uma criança menina  de ${idade} anos.`
            } else if (idade <= 17) {
                img.setAttribute('src', 'adolescente-woman.png')
                resultado.innerHTML = `Detectamos um adolescente menina  de ${idade} anos.`
            } else if (idade <= 25) {
                img.setAttribute('src', 'circle-young-woman.png')
                resultado.innerHTML = `Detectamos uma jovem adulta de ${idade} anos.`
            } else if (idade <= 59) {
                img.setAttribute('src', 'circle-adulto-woman.png')
                resultado.innerHTML = `Detectamos uma mulher adulto de ${idade} anos.`
            } else if (idade <= 100) {
                img.setAttribute('src', 'circle-idosa.png')
                resultado.innerHTML = `Detectamos uma mulher idosa de ${idade} anos.`
            }
        }
    }

    resultado.appendChild(img)

}