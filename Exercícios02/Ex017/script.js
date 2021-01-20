function tabuada(){
    var numtab = window.document.getElementById("txtnum")
    var tab = window.document.getElementById("seltab")

    if(numtab.value.lenght == 0){
        window.alert("[ERRO] Por favor, digite um número.")
    }else{
        var n = Number(numtab.value)
        var r = " "

        tab.innerHTML = ` `                                        //Limpa o select antes de mostrar a tabuada.

        for(var c = 1; c<=10; c++){
            r = n * c
            var item = document.createElement('option')            //Cria um item com a tag option.

            item.text= `${n} x ${c} = ${r}`

            tab.appendChild(item)                                  //Adiciona o item criado dentro do select no html 
        }
    }
    
}

