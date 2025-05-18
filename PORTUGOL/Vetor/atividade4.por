programa {
   funcao inicio() {

    /*Crie um programa que leia dois vetores de 5 números inteiros cada. Depois crie um terceiro vetor com seus valores sendo a soma dos valores dos outros vetores na mesma posição. Imprima o terceiro vetor na tela.*/

    inteiro i, A[5], B[5], C[5]

    // Lê os números do vetor A
    para (i = 0; i < 5; i++) {
        escreva("Digite o ", (i + 1), "º número do vetor A: ")
        leia(A[i])
    }
    // Lê os números do vetor B
    para (i = 0; i < 5; i++) {
        escreva("Digite o ", (i + 1), "º número do vetor B: ")
        leia(B[i])
    }
    // Soma os valores dos vetores A e B e armazena em C
    para (i = 0; i < 5; i++) {
        C[i] = A[i] + B[i]
    }
    // Imprime o vetor C
    escreva("Os elementos do vetor C (soma de A e B) são: ")
    para (i = 0; i < 5; i++) {
        escreva(C[i], " ")
    }  
   }
}