#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*Crie um programa que guarde em variáveis diferentes cada uma das informações abaixo. Em seguida, imprima na tela cada uma dessas variáveis. Cada variável deve estar em uma linha diferente.

• Nome de uma banda ou cantor
• Título de uma música dele
• Ano de lançamento
• A letra da música escolhida*/

int main()
{
    char banda[50] = "Banda Exemplo";
    char musica[50] = "Música Exemplo";
    int ano = 2023;
    char letra[200] = "Esta é a letra da música exemplo. Ela fala sobre coisas legais e interessantes.";

    printf("Banda: %s\n", banda);
    printf("Música: %s\n", musica);
    printf("Ano de Lançamento: %d\n", ano);
    printf("Letra da Música: %s\n", letra);
    return 0;
}