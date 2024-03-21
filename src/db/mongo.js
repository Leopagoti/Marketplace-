function manipularArray(arr: any[]): void {
    // Verificar se o array está vazio
    if (arr.length === 0) {
        console.log("O array está vazio.");
        return;
    }

    // Verificar o tipo de cada posição e realizar as operações correspondentes
    for (let i = 0; i < arr.length; i++) {
        const elemento = arr[i];
        if (typeof elemento === 'number') {
            arr[i] = elemento * Math.floor(Math.random() * 10) + 1; // Multiplica por um número aleatório entre 1 e 10
        } else if (typeof elemento === 'string') {
            arr[i] = elemento.split('').reverse().join(''); // Inverte a string
        } else if (typeof elemento === 'boolean') {
            arr[i] = true; // Transforma em verdadeiro
        }
        // Caso for de qualquer outro tipo, não fazer nada
    }

    // Imprimir os valores do array na ordem invertida
    console.log("Array após manipulação:", arr.reverse());
}

// Exemplo de uso
const meuArray: (number | string | boolean)[] = [1, "hello", true, 42];
manipularArray(meuArray);
