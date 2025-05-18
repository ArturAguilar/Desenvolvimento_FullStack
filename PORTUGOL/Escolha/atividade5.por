programa {
   funcao inicio() {
    
/*Crie uma calculadora usando o escolha, que pergunte qual das operações básicas quer fazer (+, -, * e /), em seguida peça os dois números e mostre o resultado da operação matemática entre eles.*/

    inteiro numero1, numero2, operacao

    escreva("Digite o primeiro número: ")
    leia(numero1)
    escreva("Digite o segundo número: ")
    leia(numero2)

    escreva("Escolha a operação (1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão): ")
    leia(operacao)

    escolha(operacao) {
        caso 1:
            escreva("Resultado da soma: ", numero1 + numero2)
            pare
        caso 2:
            escreva("Resultado da subtração: ", numero1 - numero2)
            pare
        caso 3:
            escreva("Resultado da multiplicação: ", numero1 * numero2)
            pare
        caso 4:
            se (numero2 != 0) {
                escreva("Resultado da divisão: ", numero1 / numero2)
            } senao {
                escreva("Divisão por zero não é permitida")
            }
            pare
        caso contrario:
            escreva("Operação inválida")
    }
   }
}