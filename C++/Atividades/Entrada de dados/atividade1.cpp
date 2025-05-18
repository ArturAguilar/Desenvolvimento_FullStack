#include <stdio.h>
#include <stdlib.h>

/**/

int main()
{
    char nome[50];
    
    printf("Digite seu nome completo: ");
    fgets(nome, sizeof(nome), stdin);

    printf("Seu nome completo eh: %s", nome);    
    return 0;
}