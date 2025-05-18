programa {
    inteiro n, numero, maior, i

    funcao inicio() {

    /*Crie um programa leia o número N e depois pergunte por N números inteiros. Ao final, Imprima o maior número digitado. Utilize o para.*/
    
        escreva("Quantos números você deseja digitar? ")
        leia(n)

        escreva("Digite o 1º número: ")
        leia(numero)
        maior = numero

        para (i = 2; i <= n; i++) {
            escreva("Digite o ", i, "º número: ")
            leia(numero)

            se (numero > maior) {
                maior = numero
            }
        }

        escreva("O maior número digitado foi: ", maior)
    }
}
