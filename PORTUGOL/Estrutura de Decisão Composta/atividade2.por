programa
{
    // Declaração das variáveis
    cadeia nome
    real nota1, nota2

    funcao inicio()
    {
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