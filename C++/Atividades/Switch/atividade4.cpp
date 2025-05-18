#include <stdio.h>
#include <stdlib.h>

/*Crie um programa que faça uma pergunta para o usuário e apresente 5 alternativas como possíveis respostas (a, b, c, d, e). O usuário escolherá uma das alternativas e você dirá se ele errou ou acertou.

Tanto a pergunta, quanto as alternativas ficam a seu cargo. Só pode existir uma alternativa correta.*/

int main()
{
    char resposta;

    printf("Qual é a capital do Brasil?\n");
    printf("a) São Paulo\n");
    printf("b) Brasília\n");
    printf("c) Rio de Janeiro\n");
    printf("d) Salvador\n");
    printf("e) Belo Horizonte\n");

    printf("Digite a letra correspondente à sua resposta: ");
    scanf(" %c", &resposta);

    switch (resposta) {
        case 'a':
        case 'c':
        case 'd':
        case 'e':
            printf("Resposta errada! A capital do Brasil é Brasília.\n");
            break;
        case 'b':
            printf("Resposta correta! A capital do Brasil é Brasília.\n");
            break;
        default:
            printf("Opção inválida!\n");
            break;
    }
    return 0;
}