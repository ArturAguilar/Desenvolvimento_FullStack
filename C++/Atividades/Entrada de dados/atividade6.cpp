#include <stdio.h>
#include <stdlib.h>

/*Três amigos ganharam juntos na megasena, mas estão com dificuldades na divisão do dinheiro. Como o valor gasto por eles no jogo foi diferente, o prêmio será dividido baseado nisso.O primeiro amigo receberá 45%.O segundo amigo receberá 30% O terceiro amigo receberá o restante.Crie um programa em C que leia a quantia ganha, calcule e imprima quanto cada amigo deve receber (com somente duas casas decimais).*/

int main()
{
    float premio, amigo1, amigo2, amigo3;

    printf("Digite o valor do prêmio: ");
    scanf("%f", &premio);

    amigo1 = premio * 0.45; // 45% do prêmio
    amigo2 = premio * 0.30; // 30% do prêmio
    amigo3 = premio - (amigo1 + amigo2); // O restante do prêmio

    printf("Amigo 1 receberá: R$ %.2f\n", amigo1);
    printf("Amigo 2 receberá: R$ %.2f\n", amigo2);
    printf("Amigo 3 receberá: R$ %.2f\n", amigo3);
    return 0;
}