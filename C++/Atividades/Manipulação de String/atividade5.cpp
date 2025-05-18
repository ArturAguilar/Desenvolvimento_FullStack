#include <stdio.h>
#include <string.h>

/*Crie um programa que possua um vetor de strings de 4 posições com os seguintes valores: "azul", "verde", "vermelho", "amarelo". Exiba os valores deste array de trás para frente.*/

int main()
{
    char cores[4][20] = {"azul", "verde", "vermelho", "amarelo"};
    int i;
    
    printf("Cores em ordem inversa:\n");
    for (i = 3; i >= 0; i--)
    {
        printf("%s\n", cores[i]);
    }
    return 0;
}