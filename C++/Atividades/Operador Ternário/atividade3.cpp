#include <stdio.h>
#include <stdlib.h>

/*Crie um programa que leia 3 números e imprima o maior deles na tela.*/

int main()
{
    int a, b, c;

    printf("Digite o primeiro numero: ");
    scanf("%d", &a);
    printf("Digite o segundo numero: ");
    scanf("%d", &b);
    printf("Digite o terceiro numero: ");
    scanf("%d", &c);

    // Usando o operador ternário para encontrar o maior número
    int maior = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
    printf("O maior numero é: %d\n", maior);
    return 0;
}