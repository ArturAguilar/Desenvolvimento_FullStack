#include <stdio.h>
#include <string.h>

/*Crie um programa que solicite ao usuário que digite seu nome e sobrenome separadamente, em seguida, concatene-os em uma única string. Por fim, exiba o nome completo.*/

int main()
{
    char nome[50], sobrenome[50];

    printf("Digite seu nome: ");
    scanf("%s", nome); // lê até o primeiro espaço
    printf("Digite seu sobrenome: ");
    scanf("%s", sobrenome); // lê até o primeiro espaço

    strcat(nome, sobrenome); // concatena nome
    printf("Nome completo: %s\n", nome);

    
    return 0;
}