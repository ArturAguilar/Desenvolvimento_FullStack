programa {
   funcao inicio() {
    
    /*Crie o diagrama e um programa que leia um número e imprima uma mensagem dizendo se ele é par ou impar e se ele é positivo ou negativo.*/
    
    inteiro numero

    escreva("Digite um número: ")
    leia(numero)

    se (numero > 0 e numero % 2 == 0)
        escreva("O número é positivo e par.")
    senao
        se (numero > 0 e numero % 2 != 0)
            escreva("O número é positivo e ímpar.")
        senao
            se (numero < 0 e numero % 2 == 0)
                escreva("O número é negativo e par.")
            senao
                escreva("O número é negativo e ímpar.")
    }
}