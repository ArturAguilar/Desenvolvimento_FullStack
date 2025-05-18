programa {
   funcao inicio() {

    /*Crie um programa que leia uma matriz de 3 x 3 elementos. Imprima somente os números da segunda linha.*/

    inteiro matriz[3][3], i, j

    // Leitura da matriz
        para(i=0; i<3; i++){
            para(j=0; j<3; j++){
                escreva("Digite o elemento [", i, "][", j, "]: ")
                leia(matriz[i][j])
            }
        }

    // Impressão da segunda linha
        escreva("Os elementos da segunda linha são: ")
        para(j=0; j<3; j++){
            escreva(matriz[1][j], " ")
        }
   }
}