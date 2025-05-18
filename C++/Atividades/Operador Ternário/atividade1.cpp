#include <stdio.h>
#include <stdlib.h>

/*Crie um programa que leia 2 números e imprima o maior deles na tela.*/

int main()
{
    int a, b;
    
    printf("Digite o primeiro numero: ");
    scanf("%d", &a);
    printf("Digite o segundo numero: ");
    scanf("%d", &b);

    // Usando o operador ternário para encontrar o maior número
    int maior = (a > b) ? a : b; 
    printf("O maior numero é: %d\n", maior);
    return 0;
}