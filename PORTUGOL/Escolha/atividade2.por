programa {
    funcao inicio() {

    /*Crie o diagrama e o código de um programa que pergunte qual o dia da semana. Leia sua resposta e a imprima. Utilize o escolha.*/
    
        inteiro dia

        escreva("Digite o número do dia da semana (1 a 7): ")
        leia(dia)

        escolha (dia) {
            caso 1:
                escreva("Domingo")
                pare
            caso 2:
                escreva("Segunda-feira")
                pare
            caso 3:
                escreva("Terça-feira")
                pare
            caso 4:
                escreva("Quarta-feira")
                pare
            caso 5:
                escreva("Quinta-feira")
                pare
            caso 6:
                escreva("Sexta-feira")
                pare
            caso 7:
                escreva("Sábado")
                pare
            caso contrario:
                escreva("Número inválido! Digite um valor de 1 a 7.")
        }
    }
}