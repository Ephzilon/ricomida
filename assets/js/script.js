function validador(dato){

    if (Number.isNaN(dato)){
        var retorno = "-";
    }else{
        var retorno = dato;
    }
return retorno;
}


var retornoFuncion = validador(dato);