#include <stdio.h>
#include <stdlib.h>

/*Crie um programa que pergunte e leia 2 valores ao usuário e apresente duas opções:

• 1 – Apresentar qual é o maior dos 2 valores.
• 2 – Apresentar a ordenação dos 2 valores de forma decrescente.*/

int main()
{
    float valor1, valor2;
    int opcao;

    // Solicita os valores ao usuário
    printf("Digite o primeiro valor: ");
    scanf("%f", &valor1);
    printf("Digite o segundo valor: "); 
    scanf("%f", &valor2);

    // Solicita a opção desejada
    printf("Escolha uma opcao:\n");
    printf("1 - Maior valor\n");
    printf("2 - Ordenacao decrescente\n");
    printf("Digite a opcao: ");
    scanf("%d", &opcao);

    // Verifica a opção escolhida
    switch (opcao) {
        case 1:
            if (valor1 > valor2) {
                printf("O maior valor eh: %.2f\n", valor1);
            } else if (valor2 > valor1) {
                printf("O maior valor eh: %.2f\n", valor2);
            } else {
                printf("Os valores sao iguais.\n");
            }
            break;
        case 2:
            if (valor1 > valor2) {
                printf("Ordem decrescente: %.2f, %.2f\n", valor1, valor2);
            } else {
                printf("Ordem decrescente: %.2f, %.2f\n", valor2, valor1);
            }
            break;
        default:
            printf("Opcao invalida!\n");
            break;
    }
    
    return 0;
}