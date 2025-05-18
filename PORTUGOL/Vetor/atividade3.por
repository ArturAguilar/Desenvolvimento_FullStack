programa {
   funcao inicio() {
    
    /*Crie um programa que leia um vetor A com 5 elementos inteiros. Além disso, crie um outro vetor B de mesmo tipo e tamanho. Este vetor B deve receber os valores do vetor A. Por fim, imprima os valores do vetor B.*/

    inteiro i, A[5], B[5]
    para (i = 0; i < 5; i++) {
        escreva("Digite o ", i + 1, "º elemento do vetor A: ")
        leia(A[i])
    }
    para (i = 0; i < 5; i++) {
        B[i] = A[i]
    }
    escreva("Os elementos do vetor B são: ")
    para (i = 0; i < 5; i++) {
        escreva(B[i], " ")
    }
   }
}