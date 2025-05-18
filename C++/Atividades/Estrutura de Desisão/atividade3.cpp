#include <stdio.h>
#include <stdlib.h>

/*Crie um programa em C que leia o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano.Obs: Não é necessário considerar o mês em que a pessoa nasceu.*/

int main()
{
    int ano_atual, ano_nascimento, idade;

    printf("Digite o ano atual: ");
    scanf("%d", &ano_atual);
    printf("Digite o ano de nascimento: ");
    scanf("%d", &ano_nascimento);

    idade = ano_atual - ano_nascimento;

    if (idade >= 18) {
        printf("Você pode votar este ano.\n");
    } else {
        printf("Você não pode votar este ano.\n");
    }
    return 0;
}