programa {
   funcao inicio() {
    
    /*Crie o diagrama e o código de um programa que leia 2 notas, realize a média delas e caso seja maior ou igual a 70, imprima “APROVADO!” na tela.*/

       inteiro nota1, nota2, media

        escreva("Digite a primeira nota: ")
        leia(nota1)
        escreva("Digite a segunda nota: ")
        leia(nota2)

        media = (nota1 + nota2) / 2

        se (media >= 70)
            escreva("Aprovado")
        senao
            escreva("Reprovado")
   }
}