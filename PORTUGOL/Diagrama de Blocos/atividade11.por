programa {
    inteiro nota

    funcao inicio()
    {

    /*Crie o diagrama e um programa que leia uma nota e imprima “APROVADO” caso ela seja maior ou igual que 70 e menor ou igual a 100; se ela for menor que 70, imprima “REPROVADO”.*/

        escreva("Digite a nota do aluno: ")
        leia(nota)

        se (nota >= 70 e nota <= 100)
            escreva("APROVADO")
        senao
            escreva("REPROVADO")
  }
}