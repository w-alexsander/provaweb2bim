// 1 - Crie uma função que receba um número como parâmetro e determine se ele é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000.

function primo(number){              // Cria a função primo
 if (number <= 1){                   // Excluir número menor que 1
    return false;
 }
for (var i = 2; i < number; i++){    // Loop número a número   
    if (number % i === 0){           //  Verifica se o resto é 0
        return false
    }
}

return true;
}

function listarPrimos() {              // Função listar primos
    const numerosprimos = [];
  
    for (let i = 1; i <= 1000; i++) {  // até o máximo 1000
      if (primo(i)) {
        numerosprimos.push(i);
      }
    }
  
    return numerosprimos;
  }
  

// Teste

const primos = listarPrimos();     // Listar todos de 1 a 1000
console.log(primos);


console.log(primo(5) );            // teste com o nímero 5 em especifico

// 2 - Crie uma função que receba uma senha como parâmetro e verifique se ela atende aos seguintes critérios: ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula e um número. Sua função deve receber uma senha e dizer para o usuário se ela é valida.

function senha(password) {
    if (password.length < 8) {                     // Verifica se tem mais de 8 caracteres
      return false;
    }
  
    const maiuscula = /[A-Z]/.test(password);          // Verificação se atende aos 3 critérios
    const minuscula = /[a-z]/.test(password);
    const numero = /[0-9]/.test(password);
  
    return maiuscula && minuscula && numero;
  }

// Teste

console.log(senha("test3123")); 
console.log(senha('Teste123456'));

// 3 - Crie uma função que receba um número como parâmetro e retorne o fatorial desse número. O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.

 function fatorial(num) {                       // Criação da função
    if (num < 0)                                // Retorna falso caso seja menor que 0
        return false;
    else if (num == 0)                          // Retorna 1 caso seja igual a 0 pois o fatorial de 0 é 1.
      return 1;
    else {
      return (num * fatorial(num - 1));       // Multiplica o número desejado pelo antecessor diversas vezes até 1
    }
  }


// Teste

console.log(fatorial(5));
  
// 4 - Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro. Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.

function quadradoperfeito(n) {           // Criação da função            
 return Math.sqrt(n) % 1 === 0;       // Retorna a raiz quadrada e verifica resto 1 ou 0
};

// Teste

console.log(quadradoperfeito(25));

  
