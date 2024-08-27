const notafinal = 8;
const faltas = 2;
const advertencias = 0;

if (notafinal < 7 || faltas > 4) {
    console.log('REPROVADO');
 } else {
    console.log('não foi reprovado por falta');
    
}

if (faltas >= 2 && !advertencias) {
    console.log('recebeu bonus');
 }else {
    console.log('não recebeu bônus');
    
 }