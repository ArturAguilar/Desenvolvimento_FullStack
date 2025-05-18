programa {
   funcao inicio() {
    
    /*Crie um programa que leia uma matriz 5 x 2.As linhas representam alunos (5 no total).As colunas representam notas (2 no total).Em seguida, escreva o número de alunos cuja pior nota foi na prova 1 e o número de alunos cuja pior nota foi na prova 2. Em caso de empate das piores notas de um aluno, o aluno só deve ser contabilizado uma vez.*/

    inteiro matriz[5][2], i, j, cont1, cont2
    // Leitura da matriz
        para(i=0; i<5; i++){
            para(j=0; j<2; j++){
                escreva("Digite a nota do aluno ", i+1, " na prova ", j+1, ": ")
                leia(matriz[i][j])
            }
        }
    // Inicialização dos contadores
        cont1 = 0
        cont2 = 0

    // Contagem dos alunos cuja pior nota foi na prova 1
        para(i=0; i<5; i++){
            se(matriz[i][0] < matriz[i][1]){
                cont1++
            }
        }

    // Contagem dos alunos cuja pior nota foi na prova 2
        para(i=0; i<5; i++){
            se(matriz[i][1] < matriz[i][0]){
                cont2++
            }
        }
    // Impressão dos resultados
        escreva("Número de alunos cuja pior nota foi na prova 1: ", cont1, "\n")
        escreva("Número de alunos cuja pior nota foi na prova 2: ", cont2, "\n")
   }
}