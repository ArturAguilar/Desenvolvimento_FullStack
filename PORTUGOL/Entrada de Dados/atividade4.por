programa
{
   inteiro idade, meses, dias
   funcao inicio()
   {

   /*Crie o diagrama e o código de um programa que pergunte a idade do usuário e imprima na tela a representação dessa idade em meses e também em dias (separadamente). Considerar ano com 365 dias e que o ano tem 12 meses.*/
   
         escreva("Digite sua idade em anos: ")
         leia(idade)
         meses = idade * 12
         dias = idade * 365
         escreva("Sua idade em meses é: ", meses, "\n")
         escreva("Sua idade em dias é: ", dias)
   }
}