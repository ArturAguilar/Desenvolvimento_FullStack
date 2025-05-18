#include <stdio.h>
#include <stdlib.h>

/*Crie um programa que leia o número de horas trabalhadas em um mês, o salário por hora e, ao final, escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas.A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.OBS: Considere que o mês possua 4 semanas exatas.*/

int main()
{
    float horasTrabalhadas, salarioPorHora, salarioTotal, horasExtras;
    int horasNormais;
    horasNormais = 40 * 4; // Total de horas normais em um mês

    printf("Digite o número de horas trabalhadas no mês: ");
    scanf("%f", &horasTrabalhadas);
    printf("Digite o salário por hora: ");
    scanf("%f", &salarioPorHora);

    if (horasTrabalhadas > horasNormais) {
        horasExtras = horasTrabalhadas - horasNormais;
        salarioTotal = (horasNormais * salarioPorHora) + (horasExtras * salarioPorHora * 1.5);
    } else {
        salarioTotal = horasTrabalhadas * salarioPorHora;
    }
    printf("O salário total do funcionário é: R$ %.2f\n", salarioTotal);
    return 0;
}