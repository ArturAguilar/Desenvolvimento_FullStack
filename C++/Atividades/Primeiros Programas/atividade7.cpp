#include <stdio.h>
#include <stdlib.h>

/*Crie um programa que faça a conta para encontrar o quanto restará no final do mês e imprima na tela. OBS: Salário - contas, Salário = 2000. Conta1 = 380. Conta2 = 160. Conta3 = 420. Conta4 = 500. Conta5 = 38*/

int main()
{
    float salario = 2000.0;
    float conta1 = 380.0;
    float conta2 = 160.0;
    float conta3 = 420.0;
    float conta4 = 500.0;
    float conta5 = 38.0;
    float totalContas = conta1 + conta2 + conta3 + conta4 + conta5;
    float saldoFinal = salario - totalContas;

    printf("========================== Extrato Mensal ===========================\n");
    printf("Salário: %.2f\n", salario);
    printf("Conta 1: %.2f\n", conta1);
    printf("Conta 2: %.2f\n", conta2);
    printf("Conta 3: %.2f\n", conta3);
    printf("Conta 4: %.2f\n", conta4);
    printf("Conta 5: %.2f\n", conta5);
    printf("---------------------------------------------------------------------\n");
    printf("Total de contas: %.2f\n", totalContas);
    printf("Saldo final: %.2f\n", saldoFinal);
    printf("=====================================================================\n");
    return 0;
}