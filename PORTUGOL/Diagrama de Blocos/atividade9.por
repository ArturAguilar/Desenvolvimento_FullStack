programa
{
    inteiro num, antecessor, sucessor
   funcao inicio()
   {
         escreva("Digite um número: ")
         leia(num)
         antecessor = num - 1
         sucessor = num + 1
         escreva("O antecessor de ", num, " é ", antecessor, "\n")
         escreva("O sucessor de ", num, " é ", sucessor)
   }
}