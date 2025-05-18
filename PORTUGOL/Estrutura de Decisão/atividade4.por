programa {
   funcao inicio() {
    
    /*Crie o diagrama e o código de um programa que o usuário informe o salário recebido e o total gasto. Imprima na tela “Gastos dentro do orçamento” caso o valor gasto não ultrapasse o valor do salário.*/
    
    real salario, totalDespesas

    escreva("Digite o seu salário: ")
    leia(salario)
    escreva("Digite o total de despesas: ")
    leia(totalDespesas)

    se (totalDespesas > salario)
        escreva("Você está no vermelho.")
    senao
        escreva("Você está no azul.")
   }
}