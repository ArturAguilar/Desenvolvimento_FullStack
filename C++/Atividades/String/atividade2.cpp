#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*Crie um programa que declare uma variável do tipo string e armazene um endereço de e-mail nessa variável. Em seguida, imprima essa string na tela.*/

int main()
{
    char email[50] = " example@example.com";
    printf("Meu e-mail é: %s\n", email);
    return 0;
}