#include <stdio.h>
#include <stdlib.h>

/* 
Este programa lê um tempo em minutos, calcula e exibe o equivalente em horas e minutos no formato "horas:minutos".
Exemplos:
- Tempo = 40. Resposta: 00:40 minutos.
- Tempo = 60. Resposta: 1:00 horas.
- Tempo = 200. Resposta: 3:20 horas.
*/

int main()
{
    int tempo, horas, minutos;

    // Solicita o tempo em minutos ao usuário
    printf("Digite o tempo em minutos: ");
    scanf("%d", &tempo);

    // Calcula o número de horas e minutos
    horas = tempo / 60;    // Número de horas
    minutos = tempo % 60;  // Minutos restantes

    // Exibe o resultado no formato horas:minutos
    printf("%02d:%02d horas.\n", horas, minutos);

    return 0;
}