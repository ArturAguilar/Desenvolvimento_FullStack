#include <stdio.h>
#include <stdlib.h>

/*Elabore um algoritmo que dada a idade de um nadador classifica-o em uma das seguintes categorias:

Infantil A 5 - 7 anos
Infantil B 8 - 10 anos
Juvenil A 11 - 13 anos
Juvenil B 14 - 17 anos
Adulto 18 + anos

Caso seja digitado uma idade menor que entre 1 – 4, Digite “Idade inválida!”.
Trate como impossível a digitação de números menores que 1.*/

int main()
{
    int idade;

    // Solicita a idade do nadador
    printf("Digite a idade do nadador: ");
    scanf("%d", &idade);

    // Verifica idades menores que 1
    if (idade < 1) {
        printf("Idade inválida!\n");
    } else {
        // Classifica a idade usando switch
        switch (idade) {
            case 5: case 6: case 7:
                printf("Categoria: Infantil A\n");
                break;
            case 8: case 9: case 10:
                printf("Categoria: Infantil B\n");
                break;
            case 11: case 12: case 13:
                printf("Categoria: Juvenil A\n");
                break;
            case 14: case 15: case 16: case 17:
                printf("Categoria: Juvenil B\n");
                break;
            default:
                if (idade >= 18) {
                    printf("Categoria: Adulto\n");
                } else {
                    printf("Idade inválida!\n");
                }
                break;
        }
    }

    return 0;
}