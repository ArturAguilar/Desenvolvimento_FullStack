programa {
   funcao inicio() {
       
    /*Crie o diagrama e o código de um programa que leia um número entre 0 e 5, e escreva estenúmero por extenso. Utilize o escolha.*/
    
       inteiro opcao

       escreva("Digite um número de 0 a 5 para ver por extenso: ")
       leia(opcao)

       escolha (opcao) {
            caso 0:
                escreva("0 por extenso é: zero")
                pare
            caso 1:
                escreva("1 por extenso é: um")
                pare
            caso 2:
                escreva("2 por extenso é: dois")
                pare
            caso 3:
                escreva("3 por extenso é: três")
                pare
            caso 4:
                escreva("4 por extenso é: quatro")
                pare
            caso 5:
                escreva("5 por extenso é: cinco")
                pare
            caso contrario:
                escreva("Número inválido. Digite um número de 0 a 5.")
                pare
        }
   }
}