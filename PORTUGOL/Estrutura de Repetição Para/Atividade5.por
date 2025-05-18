programa {
    real altura, maiorAltura, menorAltura, somaAlturas
    inteiro idade, i, menores18, maiores60

    funcao inicio() {

    /*Elabore um algoritmo que receba a altura de 10 pessoas, calcule e apresente na tela: a maior altura, a menor altura, a média de altura, o número de pessoas com menos de 18 anos, o número de pessoas com mais de 60 anos.*/
    
        somaAlturas = 0
        menores18 = 0
        maiores60 = 0

        escreva("Digite a altura da 1ª pessoa (em metros): ")
        leia(altura)
        escreva("Digite a idade da 1ª pessoa: ")
        leia(idade)

        maiorAltura = altura
        menorAltura = altura
        somaAlturas = altura

        se (idade <= 18) {
            menores18++
        } senao se (idade > 60) {
            maiores60++
        }

        para (i = 2; i <= 3; i++) {
            escreva("\nDigite a altura da ", i, "ª pessoa (em metros): ")
            leia(altura)
            escreva("Digite a idade da ", i, "ª pessoa: ")
            leia(idade)

            somaAlturas = somaAlturas + altura

            se (altura > maiorAltura) {
                maiorAltura = altura
            }

            se (altura < menorAltura) {
                menorAltura = altura
            }

            se (idade <= 18) {
                menores18++
            } senao se (idade > 60) {
                maiores60++
            }
        }

        escreva("\nMaior altura: ", maiorAltura, " m")
        escreva("\nMenor altura: ", menorAltura, " m")
        escreva("\nMédia das alturas: ", somaAlturas / 10, " m")
        escreva("\nPessoas com menos de 18 anos: ", menores18)
        escreva("\nPessoas com mais de 60 anos: ", maiores60)
    }
}