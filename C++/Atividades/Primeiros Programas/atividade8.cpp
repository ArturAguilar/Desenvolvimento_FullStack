#include <stdio.h>
#include <stdlib.h>

/*Crie um programa que faça a conta para dividir as pizzas igualmente entre todas as pessoas e imprima na tela. Pessoas = 4. Pizza = 2.*/

int main()
{
    int pessoas = 4;
    int pizza = 2 * 8; // 1 pizza = 8 pedaços
    float pizzaPorPessoa = pizza / pessoas;

    printf("========================== Divisão de Pizza ==========================\n");
    printf("Pessoas: %d\n", pessoas);
    printf("Pizza: %d\n", pizza);
    printf("----------------------------------------------------------------------\n");
    printf("Pizza por pessoa: %f\n", pizzaPorPessoa);  
    printf("======================================================================\n");
    return 0;
}