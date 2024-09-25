function verificar(){
    var ano = new Date()
    var anoAtual = ano.getUTCFullYear()
    var anoNasc_usuario = document.querySelector("input#ano_nasc")
    var resultado = document.querySelector("div#res")
    var res_genero = document.getElementsByName('res_sexo')
    var img = document.createElement('img')

    if (anoNasc_usuario.value.length == 0 || Number(anoNasc_usuario.value) > anoAtual){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var idade = anoAtual - Number(anoNasc_usuario.value)
        img.setAttribute('id', 'foto')

        if(res_genero[0].checked){
            if(idade >= 0 && idade <= 2){
                img.setAttribute('src', 'circle-bebe-man.png')
                resultado.innerHTML = `Detectamos um bebe de ${idade} anos.`
            }
        }else{
            
        }
    }

    resultado.appendChild(img)

}