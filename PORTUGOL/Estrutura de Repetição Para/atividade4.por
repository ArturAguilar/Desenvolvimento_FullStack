programa {
    inteiro quantidade, i, totalVogais
    caracter letra

    funcao inicio() {

    /*Crie um programa que leia quantas vezes irá executar. Em seguida peça ao usuário para digitar um caractere. Imprima quantos destes caracteres foram vogais.*/
    
        totalVogais = 0

        escreva("Quantas letras você deseja digitar? ")
        leia(quantidade)

        para (i = 1; i <= quantidade; i++) {
            escreva("Digite o ", i, "º caractere: ")
            leia(letra)

            // Verifica se é uma vogal (considerando minúsculas e maiúsculas)
            se (letra == 'a' ou letra == 'e' ou letra == 'i' ou letra == 'o' ou letra == 'u' ou
                letra == 'A' ou letra == 'E' ou letra == 'I' ou letra == 'O' ou letra == 'U') {
                totalVogais++
            }
        }

        escreva("\nTotal de vogais digitadas: ", totalVogais)
    }
}