function verificarPar(numero){
    if(numero % 2 === 0){
        console.log('par')
    }
    else{
        console.log('impar')
    }
}
verificarPar(4);

function calcularNumero(numero1,numero2){
    console.log( numero1 + numero2);
    console.log( numero1 - numero2 );
    console.log( numero1 * numero2 );
    console.log( numero1 / numero2 );
}

calcularNumero(10,2);

for(let i = 10; i > 0; i--){
    console.log(i)
}

let original = "JavaScript";
let invertido = original.split("").reverse().join("");
console.log(invertido);

