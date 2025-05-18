#include <stdio.h>
#include <stdlib.h>

/*Crie um programa que leia 3 valores. Os valores representam os lados de um triângulo. De acordo com os valores imprima:

• “Equilatero”, se todos os lados forem iguais.
• “Isosceles”, se 2 lados forem iguais.
• “Escaleno”, se todos os lados tiverem medidas diferentes.*/

int main()
{
    float a, b, c;

    printf("Digite o valor do lado A: ");
    scanf("%f", &a);
    printf("Digite o valor do lado B: ");
    scanf("%f", &b);
    printf("Digite o valor do lado C: ");
    scanf("%f", &c);

    if (a == b && b == c) {
        printf("Triângulo Equilátero\n");
    } else if (a == b || a == c || b == c) {
        printf("Triângulo Isósceles\n");
    } else {
        printf("Triângulo Escaleno\n");
    }
    
    return 0;
}