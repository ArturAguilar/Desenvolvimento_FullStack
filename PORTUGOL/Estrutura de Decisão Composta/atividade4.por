programa {
   funcao inicio() {
    
    inteiro numero

    escreva("Digite um número: ")
    leia(numero)
    se (numero % 5 == 0) {
        escreva("O número é divisível por 5")
    } senao {
        escreva("O número não é divisível por 5")
    }
   }
}