#include <stdio.h>
#include <stdlib.h>

/*Crie um programa que leia o sexo do usuário, se for masculino, imprima “MASCULINO” na tela.Considere M = masculino; F = feminino.*/

int main()
{
    char sexo;

    printf("Digite o sexo (M/F): ");
    scanf(" %c", &sexo);

    // Usando o operador ternário para verificar o sexo
    const char* resultado = (sexo == 'M' || sexo == 'm') ? "MASCULINO" : "FEMININO";
    printf("O sexo informado é: %s\n", resultado);
    return 0;
}