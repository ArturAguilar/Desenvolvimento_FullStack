programa
{
    // Declaração das variáveis
    cadeia nome
    real nota1, nota2

    funcao inicio()
    {

    /*Crie o diagrama e um programa que leia o nome do aluno e suas duas notas. Uma das notas é a média final e a outra é a nota de recuperação. Se pelo menos uma das notas for maior ou igual a 70 imprima o nome do aluno e diga que ele foi aprovado, caso contrário, imprima o nome do aluno e diga que ele foi reprovado.*/

        escreva("Digite o nome do aluno: ")
        leia(nome)

        escreva("Digite a média final: ")
        leia(nota1)

        escreva("Digite a nota de recuperação: ")
        leia(nota2)

        se (nota1 >= 70 ou nota2 >= 70)
        {
            escreva("Aluno ", nome, " aprovado!")
        }
        senao
        {
            escreva("Aluno ", nome, " reprovado.")
        }
    }
}