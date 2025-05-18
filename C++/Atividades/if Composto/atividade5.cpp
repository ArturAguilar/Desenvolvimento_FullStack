#include <stdio.h>
#include <stdlib.h>

/*Crie um programa em C que leia os 3 valores de um produto:

• quantidade atual em estoque
• quantidade máxima em estoque
• quantidade mínima em estoque Calcule e imprima a média entre a quantidade máxima e a quantidade mínima.

Se a média for maior ou igual a quantidade atual em estoque, imprima “Não efetue uma nova compra”, caso contrário, imprima “Efetue uma nova compra”*/

int main()
{
    int quantidadeAtual, quantidadeMaxima, quantidadeMinima;
    float media;

    printf("Digite a quantidade atual em estoque: ");
    scanf("%d", &quantidadeAtual);
    printf("Digite a quantidade máxima em estoque: ");
    scanf("%d", &quantidadeMaxima);
    printf("Digite a quantidade mínima em estoque: ");
    scanf("%d", &quantidadeMinima);

    // Calcula a média entre a quantidade máxima e a quantidade mínima
    media = (quantidadeMaxima + quantidadeMinima) / 2.0;
    if (media >= quantidadeAtual) {
        printf("Não efetue uma nova compra\n");
    } else {
        printf("Efetue uma nova compra\n");
    }

    // Exibe a média calculada
    printf("A média entre a quantidade máxima e a quantidade mínima é: %.2f\n", media);
    // Exibe a quantidade atual em estoque
    printf("A quantidade atual em estoque é: %d\n", quantidadeAtual);
    // Exibe a quantidade máxima em estoque
    printf("A quantidade máxima em estoque é: %d\n", quantidadeMaxima);
    // Exibe a quantidade mínima em estoque
    printf("A quantidade mínima em estoque é: %d\n", quantidadeMinima);

    return 0;
}