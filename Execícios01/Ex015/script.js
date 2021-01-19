function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var txtanoNasc = window.document.getElementById("txtano")
    var res = window.document.getElementById("res")
    
    if(txtanoNasc.value == 0 || txtanoNasc.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - txtanoNasc.value
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var age = ''

        if(fsex[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade < 12){
                age = 'Menino'
                //img.setAttribute('src', 'COLOCAR O CAMNHO DA IMAGEM')

            } else if(idade >= 12 && idade < 18){
                age = 'Homem Jovem'
                //img.setAttribute('src', 'COLOCAR O CAMNHO DA IMAGEM')

            } else if(idade >= 18 && idade < 60){
                age = 'Homem Adulto'
                //img.setAttribute('src', 'COLOCAR O CAMNHO DA IMAGEM')

            } else {
                age = 'Homem Idoso'
                //img.setAttribute('src', 'COLOCAR O CAMNHO DA IMAGEM')

            }

        } else if(fsex[1].checked){
            genero = 'Feminino'
            if(idade >= 0 && idade < 12){
                age = 'Menina'
                //img.setAttribute('src', 'COLOCAR O CAMNHO DA IMAGEM')

            } else if(idade >= 12 && idade < 18){
                age = 'Mulher Jovem'
                //img.setAttribute('src', 'COLOCAR O CAMNHO DA IMAGEM')

            } else if(idade >= 18 && idade < 60){
                age = 'Mulher Adulta'
                //img.setAttribute('src', 'COLOCAR O CAMNHO DA IMAGEM')

            } else {
                age = 'Mulher Idosa'
                //img.setAttribute('src', 'COLOCAR O CAMNHO DA IMAGEM')

            }
        }

        res.innerHTML = (`Detectamos uma ${age} de ${idade} anos.`)
        res.appendChild(img) //Adiciona um elemento
    }
    
}