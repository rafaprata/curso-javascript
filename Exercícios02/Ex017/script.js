function tabuada(){
    var numtab = window.document.getElementById("txtnum")
    var n = Number(numtab.value)
    var r = " "

    for(var c = 1; c<=10; c++){
        r = n * c
        alert(`${n} x ${c} = ${r}`)
    }
}

