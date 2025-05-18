programa {
    funcao inicio() {

    /*Crie o diagrama e o código de um programa que que leia um caractere e imprima se é uma vogal. Utilize o escolha.*/
    
        caracter letra

        escreva("Digite uma letra: ")
        leia(letra)

        escolha (letra) {
            caso 'a':
            caso 'A':
            caso 'e':
            caso 'E':
            caso 'i':
            caso 'I':
            caso 'o':
            caso 'O':
            caso 'u':
            caso 'U':
                escreva("É uma vogal")
                pare
            caso contrario:
                escreva("Não é vogal")
        }
    }
}