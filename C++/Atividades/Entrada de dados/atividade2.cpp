#include <stdio.h>
#include <stdlib.h>

/*Crie um programa em C que leia 4 números inteiros, realize a soma destes e imprima o resultado na tela.*/

int main()
{
    int num1, num2, num3, num4, soma;
    
    printf("Digite o primeiro numero: ");
    scanf("%d", &num1);
    printf("Digite o segundo numero: ");
    scanf("%d", &num2);
    printf("Digite o terceiro numero: ");
    scanf("%d", &num3);
    printf("Digite o quarto numero: ");
    scanf("%d", &num4);

    soma = num1 + num2 + num3 + num4;

    printf("A soma dos numeros eh: %d\n", soma);
    return 0;
}