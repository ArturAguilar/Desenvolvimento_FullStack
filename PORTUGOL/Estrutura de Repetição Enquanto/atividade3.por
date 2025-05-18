programa {
   funcao inicio() {
    
    /*Crie um programa que pergunte quantas pessoas vão responder, depois pergunte o sexo de cada uma delas (M/F). Leia as informações e imprima os sexos na tela.*/
    
    inteiro sexo, i, quantidadeDePessoas
    i = 1
    quantidadeDePessoas = 0

    escreva("Quantas pessoas você deseja cadastrar? ")
    leia(quantidadeDePessoas)

    enquanto (i <= quantidadeDePessoas) {
        escreva("Digite o sexo da pessoa ", i, " (1 para masculino, 2 para feminino): ")
        leia(sexo)

        se (sexo == 1) {
            escreva("A pessoa ", i, " é do sexo masculino.\n")
        } senao se (sexo == 2) {
            escreva("A pessoa ", i, " é do sexo feminino.\n")
        } senao {
            escreva("Sexo inválido. Por favor, digite 1 ou 2.\n")
        }
        
        i++
    }
   }
}