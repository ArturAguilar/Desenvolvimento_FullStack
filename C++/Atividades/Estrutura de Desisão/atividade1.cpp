#include <stdio.h>
#include <stdlib.h>

/*Crie um programa em C que leia um número e imprima a mensagem “É MAIOR QUE 10!” se ele for maior que 10.*/

int main()
{
    int num;
    
    printf("Digite um numero: ");
    scanf("%d", &num);

    if(num > 10)
    {
        printf("É MAIOR QUE 10!\n");
    }
    else
    {
        printf("É MENOR OU IGUAL A 10!\n");
    }
    
    return 0;
}