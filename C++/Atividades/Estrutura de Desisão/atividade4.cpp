#include <stdio.h>
#include <stdlib.h>

/* 
Este programa lê dois valores inteiros e os imprime em ordem crescente.
Se os valores forem iguais, informa ao usuário.
*/

int main()
{
    int num1, num2;

    // Solicita os dois números ao usuário
    printf("Digite o primeiro número: ");
    scanf("%d", &num1);
    printf("Digite o segundo número: ");
    scanf("%d", &num2);

    // Verifica a relação entre os números e exibe o resultado
    if (num1 == num2) {
        printf("Os valores são iguais: %d e %d.\n", num1, num2);
    } else if (num1 < num2) {
        printf("Ordem crescente: %d, %d\n", num1, num2);
    } else {
        printf("Ordem crescente: %d, %d\n", num2, num1);
    }

    return 0;
}