programa {
   funcao inicio() {
    
    /*Crie o diagrama e o código de um programa que leia 2 números e imprima o maior deles na tela.*/
    
       inteiro num1, num2

        escreva("Digite o primeiro número: ")
        leia(num1)
        escreva("Digite o segundo número: ")
        leia(num2)
        se (num1 > num2)
            escreva("O primeiro número é maior que o segundo.")
        senao
            se (num1 < num2)
                escreva("O segundo número é maior que o primeiro.")
            senao
                escreva("Os números são iguais.")
   }
}