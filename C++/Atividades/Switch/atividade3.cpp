#include <stdio.h>
#include <stdlib.h>

/*Um vendedor precisa de um algoritmo que calcule o preço total devido por um cliente. O algoritmo deve receber o código de um produto e a quantidade comprada e calcular o preço total, usando a tabela abaixo. Mostre uma mensagem no caso de código inválido. Utilize o switch.

Código do Produto 1001 Preço unitário 5,32
                  1324                6,45
                  6548                2,37
                  987                 4,32*/

int main()
{
    int codigo, quantidade;
    float preco_unitario, total;

    // Solicita o código do produto e a quantidade comprada
    printf("Digite o código do produto: ");
    scanf("%d", &codigo);
    printf("Digite a quantidade comprada: ");
    scanf("%d", &quantidade);

    // Verifica o código do produto e calcula o preço total
    switch (codigo) {
        case 1001:
            preco_unitario = 5.32;
            break;
        case 1324:
            preco_unitario = 6.45;
            break;
        case 6548:
            preco_unitario = 2.37;
            break;
        case 987:
            preco_unitario = 4.32;
            break;
        default:
            printf("Código inválido!\n");
            return 1; // Encerra o programa com erro
    }
    // Calcula o preço total
    total = preco_unitario * quantidade;
    // Exibe o resultado
    printf("Preço total: R$ %.2f\n", total);
    return 0;
}