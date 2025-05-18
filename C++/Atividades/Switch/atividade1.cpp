#include <stdio.h>
#include <stdlib.h>

/*Crie um programa que faça a conversão de dólar para real ou real para dólar. Leia qual a opção desejada, a quantia que possui da moeda atual e a cotação da moeda desejada. Utilize o switch.*/

int main()
{
    float valor, cotacao, resultado;
    int opcao;
    
    printf("Escolha a opcao desejada:\n");
    printf("1 - Dolar para Real\n");
    printf("2 - Real para Dolar\n");
    printf("Digite a opcao: ");
    scanf("%d", &opcao);
    
    switch(opcao) {
        case 1:
            printf("Digite o valor em Dólar: ");
            scanf("%f", &valor);
            printf("Digite a cotacao do Dólar: ");
            scanf("%f", &cotacao);
            resultado = valor * cotacao;
            printf("Valor em Real: %.2f\n", resultado);
            break;
        case 2:
            printf("Digite o valor em Real: ");
            scanf("%f", &valor);
            printf("Digite a cotacao do Real: ");
            scanf("%f", &cotacao);
            resultado = valor / cotacao;
            printf("Valor em Dólar: %.2f\n", resultado);
            break;
        default:
            printf("Opcao invalida!\n");
            break;
    }
    return 0;
}