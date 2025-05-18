#include <stdio.h>
#include <stdlib.h>

/*Crie um programa que leia o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo que ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor, calcular e escrever o seu salário total.*/

int main()
{
    float salarioFixo, valorVendas, comissao, salarioTotal;

    printf("Digite o salário fixo do vendedor: ");
    scanf("%f", &salarioFixo);
    printf("Digite o valor das vendas efetuadas: ");
    scanf("%f", &valorVendas);

    if (valorVendas <= 1500) {
        comissao = valorVendas * 0.03;
    } else {
        comissao = (1500 * 0.03) + ((valorVendas - 1500) * 0.05);
    }
    salarioTotal = salarioFixo + comissao;

    printf("O salário total do vendedor é: R$ %.2f\n", salarioTotal);
    return 0;
}