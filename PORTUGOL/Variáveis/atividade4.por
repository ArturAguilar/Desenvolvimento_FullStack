programa {
   funcao inicio() {
     
     /*Crie o código de um programa que pergunte se o usuário pegou covid e imprima o valor da variável covid. Considere covid como: falso*/
     
       logico covid

       escreva("Você pegou COVID? (sim ou não): ")
       leia(covid)
         se (covid == "sim") {
              escreva("Você está em isolamento.")
         } senao {
              escreva("Você não está em isolamento.")
         }
   }
}