#include <stdio.h>
#include <stdlib.h>

/*Crie um programa que faça a conta do total a ser pago numa lista de compras e imprima na tela. Produto1 = 100. Produto2 = 87. Produto3 = 232.*/

int main()
{
    float produto1 = 100.0;
    float produto2 = 87.0;
    float produto3 = 232.0;
    float total = produto1 + produto2 + produto3;
    
    printf("Produto 1: %.2f\n", produto1);
    printf("Produto 2: %.2f\n", produto2);
    printf("Produto 3: %.2f\n", produto3);
    printf("Total a ser pago: %.2f\n", total);
    return 0;
}