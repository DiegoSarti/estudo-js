 
 console.log(estudanteReprovou(6, 5));
 console.log(estudanteReprovou(10, 2));
 
 
 
 const estudanteReprovou = function (notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
        return ture;
        
    } else {
        return false;
    }
}

