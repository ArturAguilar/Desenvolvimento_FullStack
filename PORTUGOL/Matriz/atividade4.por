programa {
   funcao inicio() {
    
    /*Crie um programa que leia uma matriz de 3 x 3 elementos. Calcule a soma dos elementos que estão abaixo da diagonal principal.Diagonal principal: [0][0]; [1][1]; [2][2]*/

    inteiro matriz[3][3], i, j, soma

    // Leitura da matriz
        para(i=0; i<3; i++){
            para(j=0; j<3; j++){
                escreva("Digite o elemento [", i, "][", j, "]: ")
                leia(matriz[i][j])
            }
        }
    // Cálculo da soma dos elementos abaixo da diagonal principal
    soma = 0
        para(i=0; i<3; i++){
            para(j=0; j<3; j++){
                se(i > j){
                    soma = soma + matriz[i][j]
                }
            }
        }
    // Impressão da soma
        escreva("A soma dos elementos abaixo da diagonal principal é: ", soma)
   }
}