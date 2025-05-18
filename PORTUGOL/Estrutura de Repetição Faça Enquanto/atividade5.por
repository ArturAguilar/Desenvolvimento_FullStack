programa {
    funcao inicio() {

    /*Elabore um algoritmo que pergunte e leia a operação que o usuário deseja executar, sendo as operações 1: soma; 2: subtração. Depois pergunte e leia dois valores que serão somados (caso escolha soma) ou subtraídos (caso escolha subtração). Execute somente a operação desejada e imprima o resultado. Após imprimir o resultado, pergunte se o usuário deseja realizar outra operação. Caso digite ‘S’ ou ‘s’, repita todo o processo. Caso contrário, finalize o programa. Se uma operação inválida for digitada, imprima na tela "Operação inválida!” e pergunte novamente.*/

        inteiro operacao
        real valor1, valor2, resultado
        caracter repetir

        repetir = 'S' // Inicializa a variável para entrar no laço

        enquanto (repetir == 'S' ou repetir == 's') {
            // Pergunta pela operação
            escreva("\nQual operação deseja realizar?\n")
            escreva("1 - Soma\n")
            escreva("2 - Subtração\n")
            escreva("Digite a opção: ")
            leia(operacao)

            // Verifica a operação escolhida
            escolha (operacao) {
                caso 1:
                    escreva("Digite o primeiro valor: ")
                    leia(valor1)
                    escreva("Digite o segundo valor: ")
                    leia(valor2)
                    resultado = valor1 + valor2
                    escreva("Resultado da soma: ", resultado, "\n")
                    pare

                caso 2:
                    escreva("Digite o primeiro valor: ")
                    leia(valor1)
                    escreva("Digite o segundo valor: ")
                    leia(valor2)
                    resultado = valor1 - valor2
                    escreva("Resultado da subtração: ", resultado, "\n")
                    pare

                caso contrario:
                    escreva("Operação inválida!\n")
            }

            escreva("\nDeseja realizar outra operação? (S/s para sim): ")
            leia(repetir)
        }

        escreva("Programa finalizado.")
    }
}