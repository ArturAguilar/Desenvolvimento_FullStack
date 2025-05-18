programa {
   funcao inicio() {
    
    /*Crie um programa que pergunte um número inteiro. Leia o número e faça a tabuada até o número 10, imprimindo os valores.*/
    
        inteiro numero, i
        i = 1

        escreva("Digite um número para ver a tabuada: ")
        leia(numero)

        enquanto (i <= 10){
            escreva("\n", numero, " * ", i, " = ", numero * i)
            i++
        }
   }
}