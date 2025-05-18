programa {
   funcao inicio() {
    
    /*Crie um programa que pergunte a quantidade de notas que o usuário deseja digitar, depois pergunte cada uma destas notas. Leia os valores, realize a média das notas e imprima na tela.*/
    
        inteiro quantidadeDeNotas, i
        real nota, soma, media
        soma = 0
        i = 1

        escreva("Quantas notas você deseja cadastrar? ")
        leia(quantidadeDeNotas)

        enquanto (i <= quantidadeDeNotas) {
            escreva("Digite a nota da pessoa ", i, ": ")
            leia(nota)

            // Acumula a soma das notas
            soma = soma + nota
            i++
        }

        // Calcula a média
        media = soma / quantidadeDeNotas

        // Exibe a média
        escreva("A média das notas é: ", media, "\n")
   }
}