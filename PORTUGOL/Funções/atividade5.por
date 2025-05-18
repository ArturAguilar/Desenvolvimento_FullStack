programa {

   funcao inicio() {
    
        /*Crie um programa que leia um número inteiro e possua uma função que calcula o dobro deste número. Imprima o valor da função na tela.*/

        inteiro numero

        escreva("Digite um número inteiro: ")
        leia(numero)

        escreva("O dobro de ", numero, " é ", calculaDobro(numero), "\n")
   }

   funcao inteiro calculaDobro(inteiro n){
        retorne n * 2
   }
}