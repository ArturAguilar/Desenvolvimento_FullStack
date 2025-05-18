programa {
   funcao inicio() {
       
   /*Crie o diagrama e o código de um programa que pergunte o número de habitantes de uma cidade e faça o que se pede:
   
   • Número de votos em branco.
   • Número de votos nulos.
   • Número de votos para o candidato 1.
   • Número de votos para o candidato 2.
   
   Sabe-se que:

    • 100% da população participou da votação.
    • 4% dos votos foram em branco.
    • 6% dos votos foram nulos.
    • 40% dos votos foram para o candidato 1.
    • 50% dos votos foram para o candidato 2.*/

    inteiro habitantes, votoBranco, votoNulo, votoCandidato1, votoCandidato2     

    escreva("Digite o número total de habitantes da cidade: ")
    leia(habitantes)

    votoBranco = habitantes * 4 / 100
    votoNulo = habitantes * 6 / 100
    votoCandidato1 = habitantes * 40 / 100
    votoCandidato2 = habitantes * 50 / 100

    escreva("Número de votos em branco: ", votoBranco, "\n")
    escreva("Número de votos nulos: ", votoNulo, "\n")
    escreva("Número de votos para o candidato 1: ", votoCandidato1, "\n")   
    escreva("Número de votos para o candidato 2: ", votoCandidato2, "\n")
   }
}