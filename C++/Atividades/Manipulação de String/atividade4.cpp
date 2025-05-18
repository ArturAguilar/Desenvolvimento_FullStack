#include <stdio.h>
#include <string.h>

/*Crie um programa que solicite ao usuário que digite duas palavras e, em seguida, verifique se as palavras são iguais ou diferentes. Por fim, exiba o resultado.*/

int main()
{
    char palavra1[50], palavra2[50];
    
    printf("Digite a primeira palavra: ");
    scanf("%s", palavra1); // lê até o primeiro espaço
    printf("Digite a segunda palavra: ");
    scanf("%s", palavra2); // lê até o primeiro espaço

    // Verifica se as palavras são iguais
    if (strcmp(palavra1, palavra2) == 0)
    {
        printf("As palavras são iguais.\n");
    }
    else
    {
        printf("As palavras são diferentes.\n");
    }
    
    return 0;
}