programa {
   funcao inicio() {
    
    /*Crie o diagrama e o código de um programa que leia um número e, caso ele seja par, imprima na tela “PAR”.*/
    
    inteiro numero

    escreva("Digite um número: ")
    leia(numero)

    se (numero % 2 == 0) {
        escreva("O número é par.")
    } senao {
        escreva("O número é ímpar.")
    }
   }
}