programa
{
    inteiro num, antecessor, sucessor
   funcao inicio()
   {

   /*Crie o diagrama e o código de um programa que peça um número ao usuário e imprima na tela seu antecessor e sucessor.*/
   
         escreva("Digite um número: ")
         leia(num)
         antecessor = num - 1
         sucessor = num + 1
         escreva("O antecessor de ", num, " é ", antecessor, "\n")
         escreva("O sucessor de ", num, " é ", sucessor)
   }
}