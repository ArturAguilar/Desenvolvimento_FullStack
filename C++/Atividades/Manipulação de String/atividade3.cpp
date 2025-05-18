#include <stdio.h>
#include <string.h>

/*Crie um programa que solicite ao usuário que digite uma frase. Por fim, exiba o comprimento da frase.*/

int main() {
    char frase[100];

    printf("Digite uma frase (sem espaços): ");
    scanf("%s", frase); // lê só até o primeiro espaço

    int tamanho = strlen(frase);

    printf("O comprimento da frase é: %d caracteres\n", tamanho);

    return 0;
}