programa {
    real numero
    inteiro contador

    funcao inicio() {

    /*Crie um programa que pergunte um número real. Leia o número e o divida por 2 (sucessivamente) até que o resultado seja menor que 1. Imprima quantas divisões foram feitas.*/
    
        escreva("Digite um número real: ")
        leia(numero)

        contador = 0

        enquanto (numero >= 1) {
            numero = numero / 2
            contador = contador + 1
        }

        escreva("Número de divisões feitas: ", contador)
    }
}