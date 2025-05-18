programa {
   funcao inicio() {

    /*Faça um programa que leia a matrícula e duas notas de cada um de 3 alunos. Calcule e armazene a média para cada um deles. Exiba a matrícula, média aprovado (se for aprovado) e reprovado (se for reprovado). A média é 6,0.*/

    inteiro i, matricula[3]
    real nota1[3], nota2[3], media[3] 

    para (i = 0; i < 3; i++) {
    escreva("Digite a matrícula do aluno: ")
    leia(matricula[i])

    escreva("Digite a primeira nota do aluno: ")
    leia(nota1[i])
    escreva("Digite a segunda nota do aluno: ")
    leia(nota2[i])
    
    media[i] = (nota1[i] + nota2[i]) / 2

    se (media[i] >= 6) {
        escreva("Matrícula: ", matricula[i], " - Média: ", media[i], " - Aprovado\n")
    } senao {
        escreva("Matrícula: ", matricula[i], " - Média: ", media[i], " - Reprovado\n")
    }
    }     
   }
}