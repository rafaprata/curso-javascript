function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'Imagens/fotomanha.jpg'
        document.body.style.background = '#86B6F5'
    } else if(hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'Imagens/fototarde.jpg'
        document.body.style.background = '#F5BE98'
    } else{
        //BOA NOITE!
        img.src = 'Imagens/fotonoite.jpg'
        document.body.style.background = '#1D3078'
    }
}
