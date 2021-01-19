function contar(){
    var txtini = window.document.getElementById("txtini")
    var txtfim = window.document.getElementById("txtfim")
    var txtpas = window.document.getElementById("txtpas")
    var ini = Number(txtini.value)
    var fim = Number(txtfim.value)
    var pas = Number(txtpas.value)
    var res = window.document.getElementById("res")

    if(ini == 0 || fim == 0){
        window.alert(`[ERRO] Não é possível contar sem um valor inicial ou final!`)
    }
    if(pas == 0){
        window.alert(`Considerando passo de 1`)
        pas = 1
    }
    
}