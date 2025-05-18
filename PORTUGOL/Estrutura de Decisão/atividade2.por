programa {
   funcao inicio() {
    
    /*Crie o diagrama e o código de um programa que leia o sexo do usuário, se for masculino, imprima “MASCULINO” na tela.Considere M = masculino; F = feminino.*/
    
       caracter sexo

        escreva("Digite o sexo (M/F): ")
        leia(sexo)
        se (sexo == "M" ou sexo == "m")
            escreva("Você é do sexo masculino.")
        senao
            se (sexo == "F" ou sexo == "f")
                escreva("Você é do sexo feminino.")
   }
}