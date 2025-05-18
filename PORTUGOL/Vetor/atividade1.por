programa {
   funcao inicio() {
       
        /*Crie um programa que leia 5 números inteiros. Depois imprima estes números com a ordem invertida.*/

        inteiro i, numero[5]

        // Lê os números e armazena no vetor
        para (i = 0; i < 5; i++) {
            escreva("Digite o ", (i + 1), "º número: ")
            leia(numero[i])
        }

        // Imprime os números na ordem inversa
        escreva("Os números na ordem inversa são: ")
        para (i = 4; i >= 0; i--) {
            escreva(numero[i], " ")
        }
   }
}