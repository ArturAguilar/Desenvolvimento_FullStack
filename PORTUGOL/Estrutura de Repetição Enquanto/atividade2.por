programa {
   funcao inicio() {
    
    /*Crie um programa que pergunte a idade de 5 pessoas. Leia as idades e imprima elas na tela. Utilize o enquanto.*/
    
        inteiro idade, i
        i = 1

        enquanto (i <= 5) {
            escreva("Digite a idade da pessoa ", i, ": ")
            leia(idade)
            escreva("A idade da pessoa ", i, " é: ", idade, "\n")
            i++
        }
   }
}