#include <stdio.h>
#include <stdlib.h>

/* 
Este programa calcula o valor de um produto após a aplicação de um desconto.
O desconto deve ser informado em formato decimal (exemplo: 10% = 0.10).
*/

int main()
{
    float valorProduto, desconto, valorFinal;

    // Solicita o valor do produto
    printf("Digite o valor do produto: ");
    scanf("%f", &valorProduto);

    // Solicita o desconto em formato decimal
    printf("Digite o desconto (em decimal, ex: 0.10 para 10%%): ");
    scanf("%f", &desconto);

    // Calcula o valor final com desconto
    valorFinal = valorProduto - (valorProduto * desconto);

    // Exibe o valor final com duas casas decimais
    printf("O valor do produto com desconto é: R$ %.2f\n", valorFinal);

    return 0;
}