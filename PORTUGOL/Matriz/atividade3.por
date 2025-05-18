programa {
   funcao inicio() {
    
    /*Crie um programa que leia uma matriz de 3 x 3 elementos. Calcule a soma dos elementos que estão na diagonal principal. Ao final, imprima a soma na tela.Diagonal principal: [0][0]; [1][1]; [2][2]*/

    inteiro matriz[3][3], i, j, soma

    // Leitura da matriz
        para(i=0; i<3; i++){
            para(j=0; j<3; j++){
                escreva("Digite o elemento [", i, "][", j, "]: ")
                leia(matriz[i][j])
            }
        }
    // Cálculo da soma dos elementos na diagonal principal
        soma = 0
        para(i=0; i<3; i++){
            soma = soma + matriz[i][i]
        }
    // Impressão da soma
        escreva("A soma dos elementos na diagonal principal é: ", soma)
   }
}