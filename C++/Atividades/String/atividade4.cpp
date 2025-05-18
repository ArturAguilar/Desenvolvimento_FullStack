#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*Crie um programa que guarde em variáveis diferentes cada parte de um endereço (rua, bairro, número, cidade, estado). Em seguida, imprima na tela uma mensagem contendo seu endereço completo, utilizando as variáveis criadas.*/

int main()
{
    char rua[50] = "Rua das Flores";
    char bairro[50] = "Jardim das Rosas";
    int numero = 123;
    char cidade[50] = "São Paulo";
    char estado[50] = "SP";
    char cep[10] = "12345-678";
    char complemento[50] = "Apto 101";

    printf("Endereço completo: %s, %d, %s, %s, %s, %s\n", rua, numero, complemento, bairro, cidade, estado);
    return 0;
}