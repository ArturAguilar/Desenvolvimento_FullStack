programa {
    inteiro quantidade, numero, i, somaPares, produtoImpares

    funcao inicio() {

    /*Crie um programa que leia quantas vezes irá executar, depois pergunte um número inteiro. Verifique se o(s) número(s) é(são) par ou impar. Some todos os números pares e multiplique todos os números impares e imprima os resultados na tela. Utilize o para.*/
    
        somaPares = 0
        produtoImpares = 1

        escreva("Quantos números você deseja digitar? ")
        leia(quantidade)

        para (i = 1; i <= quantidade; i++) {
            escreva("Digite o ", i, "º número: ")
            leia(numero)

            se (numero % 2 == 0) {
                somaPares = somaPares + numero
            } senao {
                produtoImpares = produtoImpares * numero
            }
        }

        escreva("\nSoma dos números pares: ", somaPares)
        escreva("\nProduto dos números ímpares: ", produtoImpares)
    }
}