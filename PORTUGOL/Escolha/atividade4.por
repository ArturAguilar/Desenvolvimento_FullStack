programa {
   funcao inicio() {       

    /*Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
    
    Plano A: Aumento de 10%
    Plano B: Aumento de 15%
    Plano C: Aumento de 20%
    
    Crie o diagrama e o código de um programa que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Utilize o escolha.*/

    inteiro planoA, planoB, planoC, salarioAtual, salarioNovo, plano

    planoA = 10 / 100
    planoB = 15 / 100
    planoC = 20 / 100

    escreva("Digite o salário atual: ")
    leia(salarioAtual)
    escreva("Digite o plano (A, B ou C): ")
    leia(plano)

    escolha (plano) {
        caso 'A':
            salarioNovo = salarioAtual + (salarioAtual * planoA)
            escreva("O novo salário é: ", salarioNovo)
            pare
        caso 'B':
            salarioNovo = salarioAtual + (salarioAtual * planoB)
            escreva("O novo salário é: ", salarioNovo)
            pare
        caso 'C':
            salarioNovo = salarioAtual + (salarioAtual * planoC)
            escreva("O novo salário é: ", salarioNovo)
            pare
        caso contrario:
            escreva("Plano inválido")
    }
   }
}