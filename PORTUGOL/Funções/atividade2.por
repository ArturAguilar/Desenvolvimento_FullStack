programa {

    inteiro i, n
    
    funcao inicio() {
    
        /*Crie um programa que possua uma função separador e a chame na função inicio antes e depois de imprimir “Olá Mundo!”. 
        Além disso, pergunte ao usuário quantas separações deve ter. A função separador deve imprimir “-” repetidamente.*/

        escreva("Quantas separações você deseja? ")
        leia(n)

        separador(n)
        escreva("Olá Mundo!\n")
        separador(n)
    }

    funcao separador(inteiro n) {
        para (i = 1; i <= n; i++) {
            escreva("-")
        }
        escreva("\n")
    }
}