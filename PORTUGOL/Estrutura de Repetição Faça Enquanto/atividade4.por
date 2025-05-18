programa {
    funcao inicio() {
      
    /*Crie um programa que leia um número inteiro. Em seguida pergunte um outro número inteiro para o usuário até que um número igual ao primeiro seja lido. Imprima todos os números na tela e informe se era o mesmo número ou não.
    
    Ex:O número y é igual ao número x.O número y não é igual ao número x.*/

        inteiro x, y

        escreva("Digite o número base (x): ")
        leia(x)

        faca {
            escreva("Digite outro número (y): ")
            leia(y)

            escreva("Número digitado: ", y, "\n")

            se (y == x) {
                escreva("O número ", y, " é igual ao número ", x, "\n")
            } senao {
                escreva("O número ", y, " não é igual ao número ", x, "\n")
            }

        } enquanto (y != x)
    }
}