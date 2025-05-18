#include <stdio.h>
#include <stdlib.h>

/*Crie um programa em C que leia o lado de um quadrado, calcule sua área e imprima o valor do lado e da área do quadrado.Área do quadrado = lado * lado.*/

int main()
{
    float lado, area;

    printf("Digite o lado do quadrado: ");
    scanf("%f", &lado);

    area = lado * lado;

    printf("O lado do quadrado eh: %.2f\n", lado);
    printf("A area do quadrado eh: %.2f\n", area);
    return 0;
}