const letrasLower = ['abcdefghijklmnopqrstuvwxyzçáéíóúàâêôãõ'];
const letrasUpper = ['ABCDEFGHIJKLMNOPQRSTUVWXYZÇÁÉÍÓÚÀÂÊÔÃÕ'];
const numeros = ['1234567890'];
const especiais = [' ,.:;?!@#$%&*-+'];

const caracteres = letrasLower + letrasUpper + numeros + especiais;

function criptografar(palavra, razao = 5){
    let criptografado = `${razao}.`;
    
    palavra = palavra.split('');

    palavra.forEach((letra) => {
        let posicao = caracteres.indexOf(letra);
        let novaPosicao = posicao + razao;
        if(novaPosicao >= caracteres.length){
            novaPosicao = novaPosicao % caracteres.length;
        }
        criptografado += caracteres[novaPosicao];
    });

    return criptografado;
}

function descriptografar(palavra){
    let descriptografado = '';
    let razao = palavra.split('.')[0];

    palavra = palavra.split('.')[1];
    palavra = palavra.split('');

    palavra.forEach((letra) => {
        let posicao = caracteres.indexOf(letra);
        let novaPosicao = posicao - razao;
        
        if(novaPosicao < 0){
            novaPosicao = caracteres.length + novaPosicao;
        }

        descriptografado += caracteres[novaPosicao];
    });

    return descriptografado;
}