programa {
   funcao inicio() {
    
    /*Crie um programa que pergunte o peso N vezes. Leia os pesos e imprima eles na tela. Pergunte o peso de pelo menos uma pessoa. Utilize o faca enquanto.*/
    
    real peso 
    inteiro i, quantidade

    i = 1

    escreva("Digite a quantidade de pessoas: ")
    leia(quantidade)

    faca{
        escreva("\nDigite o peso da pessoa ", i, ": ")
        leia(peso)
        escreva("\nPeso da pessoa ", i, ": ", peso)
        i = i + 1
    } enquanto (i <= quantidade)
   }
}