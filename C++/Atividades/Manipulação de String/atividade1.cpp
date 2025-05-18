#include <stdio.h>
#include <string.h>

/*Crie um programa que solicite ao usuário que digite seu nome e, em seguida, copie esse nome para uma segunda variável. Por fim, exiba o nome copiado, com strcpy*/

int main() {
    char nome1[50], nome2[50];

    printf("Digite seu nome: ");
    scanf("%s", nome1); // lê até o primeiro espaço

    strcpy(nome2, nome1); // copia nome1 para nome2

    printf("Nome copiado: %s\n", nome2);
    return 0;
}