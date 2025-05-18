#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*Crie um programa que imprima o nome, codinome e o número de armaduras passados a seguir. Tony Stark, Homem de ferro e 93, respectivamente.*/

int main()
{
    char nome[50] = "Tony Stark";
    char codinome[50] = "Homem de Ferro";
    int armaduras = 93;

    printf("Nome: %s\nCodinome: %s\nNúmero de Armaduras: %d\n", nome, codinome, armaduras);
    return 0;
}