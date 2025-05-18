programa {
   funcao inicio() {

    /*Crie um programa que leia uma matriz de 3 x 3 elementos. Imprima os elementos que estão acima da diagonal principal.Diagonal principal: [0][0]; [1][1]; [2][2]*/

    inteiro matriz[3][3], i, j

    // Leitura da matriz
        para(i=0; i<3; i++){
            para(j=0; j<3; j++){
                escreva("Digite o elemento [", i, "][", j, "]: ")
                leia(matriz[i][j])
            }
        }

    // Impressão dos elementos acima da diagonal principal
        escreva("Os elementos acima da diagonal principal são: ")
        para(i=0; i<3; i++){ 
            para(j=0; j<3; j++){
                se(i < j){
                    escreva(matriz[i][j], " ")
                }
            }
        }      
   }
}