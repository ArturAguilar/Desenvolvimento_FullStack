#include <stdio.h>
#include <string.h>

/*Crie um programa que peça ao usuário para digitar os sete dias da semana, salve estes valores num array de string. Ao final, exiba os valores deste array.*/

int main()
{
    char dias[7][20]; // Array para armazenar os dias da semana
    int i;

    // Solicita ao usuário que digite os dias da semana
    for (i = 0; i < 7; i++)
    {
        printf("Digite o dia da semana %d: ", i + 1);
        scanf("%s", dias[i]); // lê até o primeiro espaço
    }

    // Exibe os dias da semana
    printf("\nOs dias da semana digitados foram:\n");
    for (i = 0; i < 7; i++)
    {
        printf("%s\n", dias[i]);
    }
    return 0;
}