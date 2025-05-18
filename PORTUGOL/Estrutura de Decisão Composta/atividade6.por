programa {
   funcao inicio() {
    
    /*Crie o diagrama e um programa que funcione como uma calculadora e opere da seguinte forma:Peça os 2 operandos;Peça a operação (soma, subtração, multiplicação ou divisão)Imprima o resultado na tela junto com o tipo de operação utilizada.*/
    
        inteiro num1, num2, operacao

        escreva("Digite o primeiro número: ")
        leia(num1)
        escreva("Digite o segundo número: ")
        leia(num2)

        escreva("Escolha a operação: 1 - Adição, 2 - Subtração, 3 - Multiplicação, 4 - Divisão: ")
        leia(operacao)
        se (operacao == 1) {
            escreva("Resultado da adição: ", num1 + num2)
        } senao se (operacao == 2) {
            escreva("Resultado da subtração: ", num1 - num2)
        } senao se (operacao == 3) {
            escreva("Resultado da multiplicação: ", num1 * num2)
        } senao se (operacao == 4) {
            se (num2 != 0) {
                escreva("Resultado da divisão: ", num1 / num2)
            } senao {
                escreva("Erro: Divisão por zero não é permitida.")
            }
        } senao {
            escreva("Operação inválida.")
        }
   }
}