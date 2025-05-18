#include <stdio.h>
#include <stdlib.h>

/*Crie o código de um programa que receba o nome do aluno e o número de faltas que ele tem. Sabendo que foram no total 10 aulas, imprima o seu nome e a porcentagem de aula que ele assistiu.*/

int main()
{
    char nome[50];
    int faltas;
    float porcentagem;

    printf("Digite seu nome completo: ");
    fgets(nome, sizeof(nome), stdin);
    printf("Digite o numero de faltas: ");
    scanf("%d", &faltas);

    porcentagem = ((10 - faltas) / 10.0) * 100;
    printf("Seu nome completo eh: %s", nome);
    printf("Voce assistiu %.2f%% das aulas.\n", porcentagem);
    return 0;
}