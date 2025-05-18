#include <stdio.h>
#include <stdlib.h>

/*Crie um programa que leia as idades de 2 homens e de 2 mulheres. Calcule e escreva a soma das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais novo com a mulher mais velha.OBS: Considere que as idades dos homens serão sempre diferentes entre si, bem como as das mulheres.*/

int main()
{
    int idadeHomem1, idadeHomem2, idadeMulher1, idadeMulher2;
    int somaIdades, produtoIdades;
    
    printf("Digite a idade do homem 1: ");
    scanf("%d", &idadeHomem1);
    printf("Digite a idade do homem 2: ");
    scanf("%d", &idadeHomem2);
    printf("Digite a idade da mulher 1: ");
    scanf("%d", &idadeMulher1);
    printf("Digite a idade da mulher 2: ");
    scanf("%d", &idadeMulher2);

    // Soma das idades do homem mais velho com a mulher mais nova
    if (idadeHomem1 > idadeHomem2) {
        somaIdades = idadeHomem1 + (idadeMulher1 < idadeMulher2 ? idadeMulher1 : idadeMulher2);
    } else {
        somaIdades = idadeHomem2 + (idadeMulher1 < idadeMulher2 ? idadeMulher1 : idadeMulher2);
    }

    // Produto das idades do homem mais novo com a mulher mais velha
    if (idadeHomem1 < idadeHomem2) {
        produtoIdades = idadeHomem1 * (idadeMulher1 > idadeMulher2 ? idadeMulher1 : idadeMulher2);
    } else {
        produtoIdades = idadeHomem2 * (idadeMulher1 > idadeMulher2 ? idadeMulher1 : idadeMulher2);
    }

    printf("Soma das idades do homem mais velho com a mulher mais nova: %d\n", somaIdades);
    printf("Produto das idades do homem mais novo com a mulher mais velha: %d\n", produtoIdades);
    return 0;
}