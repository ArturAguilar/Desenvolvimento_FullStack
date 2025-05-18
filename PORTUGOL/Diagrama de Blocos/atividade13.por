programa
{
    // Declaração de variáveis
    real num1, num2, num3, maior

    funcao inicio()
    {

    /*Crie o diagrama e um programa que leia 3 números e imprima o maior deles na tela.*/
    
        escreva("Digite o primeiro número: ")
        leia(num1)

        escreva("Digite o segundo número: ")
        leia(num2)

        escreva("Digite o terceiro número: ")
        leia(num3)

        // Comparações
        se (num1 > num2 e num1 > num3)
        {
            maior = num1
        }
        senao
        {
            se (num2 > num3)
            {
                maior = num2
            }
            senao
            {
                maior = num3
            }
        }

        escreva("O maior número é: ", maior)
    }
}