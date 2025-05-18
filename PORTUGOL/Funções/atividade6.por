programa {
   funcao inicio() {
    
    /*Crie um programa que leia o salário de uma pessoa. Crie uma função que dá um aumento de 10% em cima do salário digitado. Ao final imprima o novo salário.*/

    real salario, novoSalario

    escreva("Digite o salário: ")
    leia(salario)

    novoSalario = calculaAumento(salario)

    escreva("O novo salário com aumento de 10% é: ", novoSalario, "\n")
   }
    funcao real calculaAumento(real salario) {
        retorne salario * (10 / 100) + salario
    }
}