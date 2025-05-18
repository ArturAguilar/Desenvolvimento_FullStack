#include <stdio.h>
#include <stdlib.h>

/*As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Crie um programa em C que leia o número de maçãs compradas, calcule e escreva o custo total da compra.
*/

int main()
{
    int num_macas;
    float preco;

    printf("Digite o numero de macas compradas: ");
    scanf("%d", &num_macas);

    preco = (num_macas < 12) ? num_macas * 1.30 : num_macas * 1.00;

    printf("O custo total da compra e: R$ %.2f\n", preco);
    return 0;
}