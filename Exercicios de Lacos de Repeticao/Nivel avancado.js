//! Soma de digitos

// let numero = Number(prompt("Digite um número inteiro positivo:"));
// let soma = 0;

// while (numero > 0) {
//     soma += numero % 10;  
//     numero = Math.floor(numero / 10); 
// }

// alert("A soma dos dígitos é:", soma);



//! Fatorial

// let n = Number(prompt("Digite um número para calcular o fatorial:"));
// let fatorial = 1;

// for (let i = 1; i <= n; i++) {
//     fatorial *= i; 
// }

// alert(`${n}! =`, fatorial);

//! Inverter um numero

// let num = Number(prompt("Digite um número para inverter:"));
// let invertido = 0;

// while (num > 0) {
//     invertido = invertido * 10 + (num % 10);
//     num = Math.floor(num / 10); 
// }

// alert("Número invertido:", invertido);

//! Numeros perfeitos

// for (let i = 1; i <= 1000; i++) {
//     let somaDivisores = 0;
    
//     for (let j = 1; j < i; j++) {
//         if (i % j === 0) { 
//             somaDivisores += j;
//         }
//     }
    
//     if (somaDivisores === i) {
//         alert(i, "é um número perfeito!");
//     }
// }

